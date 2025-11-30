import { SkillCard } from '../../components/ui/SkillCard';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { skillsData } from '../../portfolio-data';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Mes Compétences"
          subtitle="Un aperçu de mes compétences techniques et des technologies que j'utilise"
        />
        
        {/* Grid responsive pour les compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCard key={index} skillCategory={category} />
          ))}
        </div>
      </div>
    </section>
  );
}