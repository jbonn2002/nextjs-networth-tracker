import { LucideProps, User } from "lucide-react";

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg
      {...props}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <path
              fill="#E5E5E5"
              d="M32,0c17.7,0,32,14.3,32,32S49.7,64,32,64S0,49.7,0,32S14.3,0,32,0z"
            />
          </g>
        </g>
        <g>
          <g>
            <rect x="43" y="26" fill="#0D8E16" width="8" height="28" />
          </g>
        </g>
        <g>
          <g>
            <path
              fill="#29CE7F"
              d="M50,10v10.4c0,0-3.7-3.5-3.7-3.5l-13,12.4l-3.7-3.5L16.3,37L13,33.3l16.9-14l3.4,3.2l9.3-9L39,10H50z"
            />
          </g>
        </g>
        <g>
          <g>
            <rect x="33" y="34" fill="#13AA45" width="8" height="20" />
          </g>
        </g>
        <g>
          <g>
            <rect x="23" y="38" fill="#1AC476" width="8" height="16" />
          </g>
        </g>
        <g>
          <g>
            <rect x="13" y="43" fill="#2BCC74" width="8" height="11" />
          </g>
        </g>
      </g>
    </svg>
  ),

  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
};
