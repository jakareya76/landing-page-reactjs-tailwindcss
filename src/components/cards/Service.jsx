import Paragraph from "../shared/Paragraph";

const Service = ({ title, description, icon }) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
      <div className="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative">
        <img src={icon} alt="icon" className="w-10" />
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {title}
        </h2>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

export default Service;
