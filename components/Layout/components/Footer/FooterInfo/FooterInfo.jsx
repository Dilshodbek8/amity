import cn from "classnames";
import Link from "next/link";

const FooterInfo = ({ className, title, links }) => {
  const classNames = cn(className);
  return (
    <div className={classNames}>
      <h1>{title}</h1>
      <ul>
        {links.map((info, idx) => (
          <li key={idx}>
            <Link href={info.href}>{info.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInfo;
