import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { useTranslation } from '../../translations';

interface ProjectFiltersProps {
  locations: string[];
  types: string[];
  onFilterChange: (filters: { locations: string[], types: string[] }) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ 
  locations, 
  types, 
  onFilterChange 
}) => {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleLocationChange = (location: string) => {
    const newLocations = selectedLocations.includes(location)
      ? selectedLocations.filter(l => l !== location)
      : [...selectedLocations, location];
    
    setSelectedLocations(newLocations);
    onFilterChange({ locations: newLocations, types: selectedTypes });
  };

  const handleTypeChange = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    
    setSelectedTypes(newTypes);
    onFilterChange({ locations: selectedLocations, types: newTypes });
  };

  const clearFilters = () => {
    setSelectedLocations([]);
    setSelectedTypes([]);
    onFilterChange({ locations: [], types: [] });
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold tracking-tight">{t('projects.filters.title')}</h2>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Filter size={20} />}
          <span>{isOpen ? t('projects.filters.close') : t('projects.filters.title')}</span>
        </button>
      </div>
      
      {isOpen && (
        <div className="bg-[#F8F7F4] p-8 mb-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">{t('projects.filters.location')}</h3>
              <div className="space-y-4">
                {locations.map((location) => (
                  <label key={location} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedLocations.includes(location)}
                      onChange={() => handleLocationChange(location)}
                      className="w-5 h-5 border-2 border-gray-300 rounded-sm checked:bg-[#1F2937] checked:border-[#1F2937] transition-colors"
                    />
                    <span className="group-hover:text-[#1F2937] transition-colors">{location}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">{t('projects.filters.type')}</h3>
              <div className="space-y-4">
                {types.map((type) => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                      className="w-5 h-5 border-2 border-gray-300 rounded-sm checked:bg-[#1F2937] checked:border-[#1F2937] transition-colors"
                    />
                    <span className="group-hover:text-[#1F2937] transition-colors">
                      {t(`projects.types.${type.toLowerCase()}`)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          {(selectedLocations.length > 0 || selectedTypes.length > 0) && (
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                {selectedLocations.length + selectedTypes.length} {t('projects.filters.filtersApplied')}
              </div>
              <button 
                onClick={clearFilters}
                className="text-sm text-[#1F2937] hover:text-gray-700 underline transition-colors"
              >
                {t('projects.filters.clearAll')}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;