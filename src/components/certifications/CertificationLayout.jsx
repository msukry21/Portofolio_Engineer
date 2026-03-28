import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const CertLink = motion(Link);
const CertificationLayout = ({
  name,
  issuer,
  date,
  category,
  status,
  credentialLink,
}) => {
  const categoryColors = {
    technical: "text-accent",
    safety: "text-green-400",
    software: "text-blue-400",
    management: "text-purple-400",
  };

  return (
    <CertLink
      variants={item}
      href={credentialLink || "#"}
      target={credentialLink && credentialLink !== "#" ? "_blank" : "_self"}
      className="text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg space-y-2"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <h2 className="text-foreground font-medium">{name}</h2>
          {category && (
            <span
              className={`text-xs border border-current/30 rounded px-1.5 py-0.5 capitalize hidden sm:inline-block ${
                categoryColors[category] || "text-muted"
              }`}
            >
              {category}
            </span>
          )}
        </div>
        <p className="text-muted text-xs sm:text-sm">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-muted text-xs sm:text-sm">{issuer}</p>
        {status && (
          <span className="text-[10px] text-green-400 border border-green-400/30 rounded px-1.5 py-0.5">
            {status}
          </span>
        )}
      </div>
    </CertLink>
  );
};

export default CertificationLayout;
