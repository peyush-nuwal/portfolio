interface Project {
  title: string;
  description: string;
}

interface DescriptionsProps {
  data: Project[];
  selectedProject: number | null;
}

const Descriptions: React.FC<DescriptionsProps> = ({
  data,
  selectedProject,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
      {data.map((project, i) => {
        const { title, description } = project;
        const isActive = selectedProject === i;

        return (
          <div
            key={i}
            className={`bg-[#ec4e39] h-fit flex flex-col lg:flex-row  justify-between items-start lg:items-center py-4 px-4 lg:px-6  w-full  transition-all duration-500 border-y-[0.1px] border-y-transparent`}
            style={{
              clipPath: isActive ? "inset(0 0 0 0)" : "inset(50% 0 50% 0)",
            }}
          >
            <p className="text-[#010101] uppercase font-bold text-4xl lg:text-7xl text-nowrap m-0 relative z-[1]">
              {title}
            </p>
            <p className="hidden lg:block w-[30%] text-sm lg:text-base font-bold text-black">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Descriptions;
