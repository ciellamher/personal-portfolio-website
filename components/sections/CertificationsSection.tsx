import Link from 'next/link';
import { Award, ChevronRight } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Introduction to Generative AI",
      org: "Google Digital Academy (Skillshop)",
      date: "Jul 2026",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      link: "#"
    },
    {
      name: "Data Analytics Essentials",
      org: "Cisco",
      date: "Mar 2026",
      img: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/52517717-589b-4c76-977d-27a53952379f.png",
      link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2Fe1d2bec0-ccfb-4818-ac1f-0d3d62d12d0f%2Flinked_in_profile&urlhash=CMl-&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BamwwyYFMR%2BS2jRO1NDPN2w%3D%3D"
    },
    {
      name: "AWS Academy Graduate - Cloud Foundations",
      org: "AWS Academy",
      date: "Mar 2026",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      link: "https://www.credly.com/badges/fb9b3687-654c-4947-ba77-8721586bc54a/linked_in_profile"
    },
    {
      name: "AI Fundamentals with IBM SkillsBuild",
      org: "Cisco",
      date: "Mar 2026",
      img: "https://images.credly.com/images/26c21273-c0ab-485b-98a7-f1212dcb82b8/image.png",
      link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2F87bc6e66-1050-41e2-9ed1-d99728e38d5f%2Flinked_in_profile&urlhash=oW4o&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bdj1sakoURuCdMGnUBYjhzw%3D%3D"
    },
    {
      name: "Artificial Intelligence Fundamentals",
      org: "IBM",
      date: "Mar 2026",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      link: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2Fdf867832-36b5-445b-a500-e1ace044337f%2Flinked_in_profile&urlhash=xpKd&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bdj1sakoURuCdMGnUBYjhzw%3D%3D"
    },
    {
      name: "Notion Advanced Badge",
      org: "Notion",
      date: "Oct 2025",
      img: "/badges/notion-advanced.png",
      link: "https://verify.skilljar.com/c/sui8pnm3wf5a"
    }
  ];

  return (
    <section id="certifications" className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 h-full transition-colors duration-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-white transition-colors duration-700">
          <Award size={22} className="text-neutral-900 dark:text-white transition-colors duration-700" /> Certifications
        </h3>
        <Link href="/certifications" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors duration-700">
          View All <ChevronRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {certifications
          .reduce((columns, cert, index, certs) => {
            const midpoint = Math.ceil(certs.length / 2);
            const columnIndex = index < midpoint ? 0 : 1;
            columns[columnIndex].push(cert);
            return columns;
          }, [[], []] as Array<Array<{ name: string; org: string; date: string; img: string; link: string }>>)
          .map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((cert, certIndex) => (
                <div key={`${columnIndex}-${certIndex}`} className="flex items-center gap-4 bg-neutral-50 dark:bg-neutral-950 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 group transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-12 h-12 object-contain rounded-lg dark:bg-white/90 dark:p-1.5 transition-all duration-700"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900 dark:text-white transition-colors duration-700">{cert.name}</h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 transition-colors duration-700">{cert.org} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
