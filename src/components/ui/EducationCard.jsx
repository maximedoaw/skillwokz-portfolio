import { Calendar, MapPin, GraduationCap, ExternalLink } from 'lucide-react';

export function EducationCard({ education }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/30 group">
      
      {/* En-tête avec logo */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
            {education.degree}
          </h3>
          <p className="text-lg text-emerald-500 font-semibold">
            {education.school}
          </p>
        </div>
      </div>

      {/* Métadonnées */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {education.period}
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {education.location}
        </div>
      </div>

      {/* Badge de statut */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <GraduationCap className="w-4 h-4" />
          En cours
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
      </div>
    </div>
  );
}