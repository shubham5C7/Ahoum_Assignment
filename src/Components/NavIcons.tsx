// src/Components/NavIcons.tsx
interface IconProps { active: boolean }
const C = "#181725";
const A = "#53B175";

export function ShopIcon({ active }: IconProps) {
  const c = active ? A : C;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="1" width="22" height="22" rx="5" stroke={c} strokeWidth="1.6"/>
      <rect x="1" y="1" width="10" height="11" rx="2" stroke={c} strokeWidth="1.4"/>
      <rect x="13" y="1" width="10" height="11" rx="2" stroke={c} strokeWidth="1.4"/>
      <rect x="1" y="13" width="10" height="10" rx="2" stroke={c} strokeWidth="1.4"/>
      <rect x="13" y="13" width="10" height="10" rx="2" stroke={c} strokeWidth="1.4"/>
    </svg>
  );
}

export function ExploreIcon({ active }: IconProps) {
  const c = active ? A : C;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="1" y1="5"  x2="14" y2="5"  stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
      <line x1="1" y1="11" x2="14" y2="11" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
      <line x1="1" y1="17" x2="10" y2="17" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="19" cy="17" r="4" stroke={c} strokeWidth="1.7"/>
      <line x1="22" y1="20" x2="24" y2="22" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

export function CartIcon({ active }: IconProps) {
  const c = active ? A : C;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M1 1h3l2.7 13h11.3" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 6h16l-1.5 9H7Z" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9"  cy="21" r="1.5" fill={c}/>
      <circle cx="19" cy="21" r="1.5" fill={c}/>
    </svg>
  );
}

export function FavouriteIcon({ active }: IconProps) {
  const c = active ? A : C;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21C12 21 2 14 2 7.5A5 5 0 0 1 12 5.5 5 5 0 0 1 22 7.5C22 14 12 21 12 21Z"
        stroke={c} strokeWidth="1.7" strokeLinejoin="round"
      />
    </svg>
  );
}

export function AccountIcon({ active }: IconProps) {
  const c = active ? A : C;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.7"/>
      <path d="M4 21c0-5 3.6-8 8-8s8 3 8 8" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}