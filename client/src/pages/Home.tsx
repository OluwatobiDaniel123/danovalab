import { Seo, OrganizationSchema } from "../components/Seo";
import { CtaBand } from "../components/CtaBand";
import { HomeSections } from "../sections/HomeSections";
import { WorkPreview } from "../sections/SharedSections";

export function Home() {
  return (
    <>
      <Seo
        title="DanovaLab"
        description="DanovaLab is a technology company building modern websites, web applications, business software, and digital solutions that help businesses operate, grow, and compete."
        path="/"
      />
      <OrganizationSchema />
      <HomeSections />
      <WorkPreview />
      <CtaBand />
    </>
  );
}
