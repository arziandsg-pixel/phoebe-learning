interface PhoebeSVGProps {
  size?: number;
  className?: string;
  bob?: boolean;
}

export function PhoebeSVG({ size = 220, className = "", bob = false }: PhoebeSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 260"
      className={`${bob ? "phoebe-bob" : ""} ${className}`}
      role="img"
      aria-label="Phoebe, maskot Bonjour avec Phoebe"
    >
      {/* twin tails behind head */}
      <path d="M50 110 C10 130, 8 190, 34 220 C46 200, 50 170, 58 140 Z" fill="#f472b6" />
      <path d="M190 110 C230 130, 232 190, 206 220 C194 200, 190 170, 182 140 Z" fill="#f472b6" />

      {/* dress body */}
      <path
        d="M75 160 C75 140, 165 140, 165 160 L182 250 C182 258, 58 258, 58 250 Z"
        fill="#c4b5fd"
      />
      <path d="M100 158 L120 190 L140 158 Z" fill="#a78bfa" />

      {/* arms */}
      <circle cx="62" cy="195" r="16" fill="#ffe3ee" />
      <circle cx="178" cy="195" r="16" fill="#ffe3ee" />

      {/* neck */}
      <rect x="108" y="128" width="24" height="18" fill="#ffe3ee" />

      {/* head */}
      <circle cx="120" cy="95" r="62" fill="#ffe3ee" />

      {/* hair back */}
      <path
        d="M58 90 C52 55, 85 25, 120 25 C155 25, 188 55, 182 90 C182 70, 160 60, 120 60 C80 60, 58 70, 58 90 Z"
        fill="#ec4899"
      />

      {/* twin-tail buns */}
      <circle cx="48" cy="88" r="14" fill="#f472b6" />
      <circle cx="192" cy="88" r="14" fill="#f472b6" />

      {/* beret */}
      <ellipse cx="120" cy="40" rx="34" ry="16" fill="#ef4444" />
      <circle cx="120" cy="26" r="7" fill="#ef4444" />

      {/* bangs */}
      <path
        d="M62 82 C62 50, 88 34, 120 34 C152 34, 178 50, 178 82 C178 66, 158 58, 120 58 C82 58, 62 66, 62 82 Z"
        fill="#f9a8d4"
      />

      {/* eyes */}
      <ellipse cx="98" cy="100" rx="12" ry="15" fill="#7c3aed" />
      <ellipse cx="142" cy="100" rx="12" ry="15" fill="#7c3aed" />
      <circle cx="101" cy="94" r="4" fill="#fff" />
      <circle cx="145" cy="94" r="4" fill="#fff" />

      {/* blush */}
      <ellipse cx="84" cy="118" rx="8" ry="5" fill="#f9a8d4" opacity="0.8" />
      <ellipse cx="156" cy="118" rx="8" ry="5" fill="#f9a8d4" opacity="0.8" />

      {/* mouth */}
      <path
        d="M110 122 Q120 132 130 122"
        stroke="#7c3aed"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
