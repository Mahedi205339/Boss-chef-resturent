

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-5 md:my-7 lg:my-10">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h1 className="text-2xl md:text-2xl lg:text-4xl border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;