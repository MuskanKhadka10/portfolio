interface SkillBarProps {
  name: string;
  level: number;
}

export const SkillBar = ({ name, level }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};