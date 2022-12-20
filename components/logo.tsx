import { SITE_URL } from "lib/utils";

type Props = {
  href?: string;
  className?: string;
};

export default function Logo({ href = SITE_URL, className = "" }: Props) {
  return (
    <div className={className}>
      <a href={href} className="flex py-2">
        Logo here
      </a>
    </div>
  );
}
