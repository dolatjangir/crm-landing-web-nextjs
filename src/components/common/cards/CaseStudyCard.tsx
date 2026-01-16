import React from "react";

interface Result {
  metric: string;
  label: string;
}

interface CaseStudy {
  industry: string;
  company: string;
  logo: string | React.ReactNode;
  challenge: string;
  solution: string;
  results: Result[];
  color: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-8 max-md:p-4 hover:border-cyan-300 hover:shadow-xl transition-all">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Company Info */}
        <div className="lg:col-span-3">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}
          >
            {caseStudy.logo}
          </div>
          <div className="text-sm text-cyan-600 font-bold uppercase mb-2">{caseStudy.industry}</div>
          <div className="text-xl font-bold text-gray-900 mb-1">{caseStudy.company}</div>
        </div>

        {/* Challenge & Solution */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <div className="text-xs text-gray-500 font-bold uppercase mb-2">Challenge</div>
            <p className="text-gray-700">{caseStudy.challenge}</p>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-bold uppercase mb-2">Solution</div>
            <p className="text-gray-700">{caseStudy.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-4">
          <div className="text-xs text-gray-500 font-bold uppercase mb-4">Results</div>
          <div className="grid grid-cols-3 gap-4">
            {caseStudy.results.map((result, j) => (
              <div key={j} className="text-center">
                <div
                  className={`text-3xl max-md:text-lg font-black bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent mb-1`}
                >
                  {result.metric}
                </div>
                <div className="text-xs text-gray-600">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
