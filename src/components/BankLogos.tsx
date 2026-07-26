import React from 'react';

interface LogoProps {
  code: string;
  className?: string;
}

export const BankLogoIcon: React.FC<LogoProps> = ({ code, className = "w-10 h-10" }) => {
  switch (code) {
    case 'HDFC':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#004B8D" />
          <path d="M20 20H80V80H20V20Z" fill="#004B8D" />
          <rect x="20" y="20" width="25" height="25" fill="#ED232A" />
          <rect x="55" y="20" width="25" height="25" fill="#ED232A" />
          <rect x="20" y="55" width="25" height="25" fill="#ED232A" />
          <rect x="55" y="55" width="25" height="25" fill="#ED232A" />
          <rect x="35" y="35" width="30" height="30" fill="#FFFFFF" />
          <rect x="42" y="20" width="16" height="60" fill="#004B8D" />
          <rect x="20" y="42" width="60" height="16" fill="#004B8D" />
        </svg>
      );

    case 'ICICI':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#052F5F" />
          <circle cx="50" cy="50" r="36" fill="#F37021" />
          <path d="M30 65C30 65 42 35 68 35C68 35 48 48 48 65H30Z" fill="#FFFFFF" />
          <circle cx="62" cy="38" r="6" fill="#FFFFFF" />
        </svg>
      );

    case 'AXIS':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#97144D" />
          <path d="M50 20L22 75H42L50 58L58 75H78L50 20Z" fill="#FFFFFF" />
          <path d="M50 38L36 68H45L50 57L55 68H64L50 38Z" fill="#97144D" />
        </svg>
      );

    case 'KOTAK':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#ED1C24" />
          <path d="M25 25V75H40V55L60 75H80L52 48L78 25H58L40 43V25H25Z" fill="#FFFFFF" />
          <circle cx="70" cy="32" r="5" fill="#003366" />
        </svg>
      );

    case 'INDUS':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#800000" />
          <path d="M25 30H75V42H58V75H42V42H25V30Z" fill="#FFFFFF" />
          <path d="M30 65C40 55 60 55 70 65" stroke="#FDB913" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    case 'IDFC':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#9E1B32" />
          <rect x="20" y="25" width="22" height="50" fill="#FFFFFF" />
          <path d="M48 25H68C76 25 82 31 82 39V61C82 69 76 75 68 75H48V25ZM63 60C67 60 69 57 69 50C69 43 67 40 63 40H58V60H63Z" fill="#FFFFFF" />
        </svg>
      );

    case 'AU-SFB':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#6A2058" />
          <path d="M50 18L22 72H38L50 48L62 72H78L50 18Z" fill="#FF8200" />
          <circle cx="50" cy="38" r="8" fill="#FFFFFF" />
        </svg>
      );

    case 'FED':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#004685" />
          <path d="M25 25H75V40H42V48H70V60H42V75H25V25Z" fill="#FFC72C" />
        </svg>
      );

    case 'BANDHAN':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#002D62" />
          <path d="M30 25C30 25 70 25 70 42C70 52 55 55 55 55C55 55 75 58 75 72C75 82 30 82 30 82V25Z" stroke="#F26522" strokeWidth="12" strokeLinejoin="round" />
        </svg>
      );

    case 'BOB':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#F26522" />
          <circle cx="50" cy="50" r="32" fill="#FFFFFF" />
          <path d="M50 24L56 40H72L59 50L64 66L50 56L36 66L41 50L28 40H44L50 24Z" fill="#F26522" />
        </svg>
      );

    case 'PNB':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#A41D23" />
          <circle cx="50" cy="50" r="32" fill="#FDB913" />
          <circle cx="50" cy="50" r="20" fill="#A41D23" />
          <rect x="42" y="30" width="16" height="40" fill="#FDB913" />
        </svg>
      );

    case 'CANARA':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#00A3E0" />
          <path d="M25 30L50 70L75 30H25Z" fill="#FFC72C" />
          <path d="M35 25L50 55L65 25H35Z" fill="#003366" />
        </svg>
      );

    case 'UNION':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#003366" />
          <path d="M30 25V55C30 66 39 75 50 75C61 75 70 66 70 55V25H55V55C55 58 53 60 50 60C47 60 45 58 45 55V25H30Z" fill="#E31837" />
        </svg>
      );

    case 'INDIAN':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#00529B" />
          <circle cx="50" cy="50" r="30" stroke="#FFC72C" strokeWidth="8" fill="none" />
          <circle cx="50" cy="50" r="14" fill="#FFC72C" />
        </svg>
      );

    case 'SBI':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#28A8E0" />
          <circle cx="50" cy="50" r="32" fill="#28A8E0" stroke="#FFFFFF" strokeWidth="12" />
          <circle cx="50" cy="50" r="28" fill="#00B2E3" />
          <circle cx="50" cy="42" r="10" fill="#FFFFFF" />
          <rect x="44" y="42" width="12" height="36" fill="#FFFFFF" />
        </svg>
      );

    // NBFCs
    case 'BAJAJ':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#0054A6" />
          <path d="M25 25H55C66 25 72 31 72 40C72 46 68 50 62 52C70 54 75 60 75 68C75 78 67 82 54 82H25V25ZM42 45H52C56 45 58 43 58 39C58 35 56 33 52 33H42V45ZM42 74H54C58 74 61 71 61 67C61 62 58 60 54 60H42V74Z" fill="#FFFFFF" />
        </svg>
      );

    case 'MMFSL':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#E31837" />
          <path d="M20 75V25L38 60L50 35L62 60L80 25V75H66V48L54 72H46L34 48V75H20Z" fill="#FFFFFF" />
        </svg>
      );

    case 'SHRIRAM':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#D9251D" />
          <path d="M50 18L60 38L82 40L65 55L70 77L50 65L30 77L35 55L18 40L40 38L50 18Z" fill="#FFC72C" />
        </svg>
      );

    case 'TATA':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#005A9C" />
          <path d="M20 30H80V42H56V75H44V42H20V30Z" fill="#FFFFFF" />
        </svg>
      );

    case 'HERO':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1E1E1E" />
          <path d="M25 25H42V42H58V25H75V75H58V58H42V75H25V25Z" fill="#E31837" />
        </svg>
      );

    case 'LT-FIN':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#FDB813" />
          <path d="M25 25H42V62H68V75H25V25Z" fill="#003366" />
          <path d="M50 25H75V38H50V25Z" fill="#003366" />
        </svg>
      );

    case 'CHOLA':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#A81C22" />
          <path d="M70 30C50 20 30 35 30 50C30 65 50 80 70 70" stroke="#FFC72C" strokeWidth="14" strokeLinecap="round" />
        </svg>
      );

    case 'MUTHOOT':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#E31E24" />
          <circle cx="50" cy="50" r="32" fill="#FFD700" />
          <path d="M32 62C32 62 38 38 50 38C62 38 68 62 68 62" stroke="#E31E24" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );

    case 'ABFL':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#C4161C" />
          <path d="M50 20L80 75H20L50 20Z" fill="#F37021" />
          <path d="M50 35L68 70H32L50 35Z" fill="#FFC72C" />
        </svg>
      );

    case 'TVS':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#002B66" />
          <path d="M20 30L50 50L80 30L50 75L20 30Z" fill="#E31837" />
        </svg>
      );

    case 'MAGMA':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#008080" />
          <circle cx="50" cy="50" r="28" fill="#FFD700" />
          <path d="M35 60L50 35L65 60" stroke="#008080" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'SUNDARAM':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#003366" />
          <circle cx="50" cy="50" r="30" stroke="#FFC72C" strokeWidth="8" fill="none" />
          <path d="M50 20V80M20 50H80" stroke="#FFC72C" strokeWidth="6" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="16" fill="#1E293B" />
          <text x="50" y="58" textAnchor="middle" fill="#F59E0B" fontSize="24" fontWeight="bold">
            {code.substring(0, 3)}
          </text>
        </svg>
      );
  }
};
