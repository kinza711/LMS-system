// import SubjectBars from "./SubjectBars";


const ChartsSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Trend */}
            <div className="bg-white p-6 rounded-2xl  shadow-sm">
                <h3 className="font-bold text-lg">Performance Trend</h3>
                <p className="text-sm text-slate-500 mb-4">
                    Average scores over 30 days
                </p>

                <img src="/trenchart.png" alt="trend chart" className="h-auto w-auto" />
            </div>

            <div className="bg-white p-6 rounded-2xl  shadow-sm">
                <h3 className="font-bold text-lg">Performance Trend</h3>
                <p className="text-sm text-slate-500 mb-4">
                    Average scores over 30 days
                </p>

                <img src="/breackdown.png" alt="trend chart" className="h-auto w-auto" />
            </div>

            {/* <SubjectBars /> */}
        </div>
    );
};

export default ChartsSection;
