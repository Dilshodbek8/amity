import cn from "classnames";
import { Breadcrumbs } from "@mui/material";
import { useRouter } from "next/router";
import Crumb from "./components/Crumb";

const generateBreadcrumbs = (router) => {
  const pathname = router.pathname.split("/");

  const crumblist = [];

  pathname.forEach((subpath, idx) => {
    if (idx === 0) {
      crumblist.push({ href: "/", text: "Home" });
    } else {
      const href = "/" + pathname.slice(0, idx + 1).join("/");
      crumblist.push({ href, text: subpath.toLocaleLowerCase() });
    }
  });

  return crumblist;
};
const BreadCrumb = ({ className }) => {
  const classNames = cn(className);
  const router = useRouter();
  const breadcrumbs = generateBreadcrumbs(router);
  return (
    <div className={classNames}>
      <Breadcrumbs
        separator=": :"
        aria-label="breadcrumb"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {breadcrumbs.map((crumb, idx) => {
          return (
            <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
