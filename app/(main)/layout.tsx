"use client";

import { useState } from "react";
import { ProfileProvider, useProfile } from "@/contexts/ProfileContext";
import { ToastProvider } from "@/components/ui/Toast";
import { Topbar } from "@/components/layout/Topbar";
import { ProfileModal } from "@/components/layout/ProfileModal";
import { OnboardingModal } from "@/components/onboarding/OnboardingModal";

function MainShell({ children }: { children: React.ReactNode }) {
  const { profile, loading } = useProfile();
  const [profileOpen, setProfileOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl phoebe-bob">🎌</div>
      </div>
    );
  }

  return (
    <>
      <Topbar onAvatarClick={() => setProfileOpen(true)} />
      <main className="max-w-[1280px] mx-auto pt-[106px] px-9 pb-20">
        <div className="page-fade-in">{children}</div>
      </main>
      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
      {profile && !profile.onboarding_done && <OnboardingModal />}
    </>
  );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProfileProvider>
      <ToastProvider>
        <MainShell>{children}</MainShell>
      </ToastProvider>
    </ProfileProvider>
  );
}
