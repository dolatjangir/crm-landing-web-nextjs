"use client";
import React, { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Calculator,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { MiniCTA } from "@/components/common/cta/MiniCTA";

type InputsState = {
  monthlyRevenue: number;
  currentConversionRate: number;
  employeeCount: number;
  avgSalary: number;
  hoursPerWeek: number;
};

type ResultsState = {
  annualRevenueIncrease: number;
  timeSavingsValue: number;
  totalBenefit: number;
  annualInvestment: number;
  netBenefit: number;
  roi: string;
  paybackMonths: string;
  conversionBoost: number;
  newConversionRate: number;
  hoursSavedPerYear: number;
};

export default function ROICalculator() {
  const [inputs, setInputs] = useState<InputsState>({
    monthlyRevenue: 100000,
    currentConversionRate: 2,
    employeeCount: 10,
    avgSalary: 60000,
    hoursPerWeek: 5,
  });

  const [results, setResults] = useState<ResultsState | null>(null);

  const handleInputChange = (
    field: keyof InputsState,
    value: string
  ) => {
    setInputs((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

const calculateROI = () => {
  // === ASSUMPTIONS (Industry realistic) ===
  const conversionUpliftPercent = 15; // 10–25% is realistic
  const automationEfficiency = 0.6;   // 60% reduction in manual work
  const annualInvestment = 15000;     // CRM cost per year

  // === REVENUE INCREASE ===
  const annualRevenueIncrease =
    inputs.monthlyRevenue *
    (conversionUpliftPercent / 100) *
    12;

  // === TIME SAVINGS ===
  const hoursSavedPerWeek =
    inputs.hoursPerWeek * automationEfficiency;

  const hoursSavedPerYear =
    hoursSavedPerWeek * 52 * inputs.employeeCount;

  // Salary assumed ANNUAL
  const costPerHour =
    inputs.avgSalary / 2080;

  const timeSavingsValue =
    hoursSavedPerYear * costPerHour;

  // === TOTAL BENEFIT ===
  const totalBenefit =
    annualRevenueIncrease + timeSavingsValue;

  const netBenefit =
    totalBenefit - annualInvestment;

  // === ROI & PAYBACK ===
  const roi = (
    (netBenefit / annualInvestment) * 100
  ).toFixed(1);

  const paybackMonths = (
    annualInvestment / (totalBenefit / 12)
  ).toFixed(1);

  // === CONVERSION DISPLAY (FOR UI) ===
  const newConversionRate =
    inputs.currentConversionRate *
    (1 + conversionUpliftPercent / 100);

  setResults({
    annualRevenueIncrease,
    timeSavingsValue,
    totalBenefit,
    annualInvestment,
    netBenefit,
    roi,
    paybackMonths,
    conversionBoost: conversionUpliftPercent,
    newConversionRate,
    hoursSavedPerYear,
  });
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            ROI Calculator
          </h1>
          <p className="text-xl text-slate-600">
            See how much you could save and earn with our solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-cyan-500" />
              Your Business Metrics
            </h2>

            <div className="space-y-6 text-slate-600">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="100000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Current Conversion Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.currentConversionRate}
                  onChange={(e) => handleInputChange('currentConversionRate', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="2.0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={inputs.employeeCount}
                  onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Average Salary ($)
                </label>
                <input
                  type="number"
                  value={inputs.avgSalary}
                  onChange={(e) => handleInputChange('avgSalary', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="60000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Hours Spent on Manual Tasks (per week)
                </label>
                <input
                  type="number"
                  value={inputs.hoursPerWeek}
                  onChange={(e) => handleInputChange('hoursPerWeek', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="5"
                />
              </div>

              <button
                onClick={calculateROI}
                className="w-full px-4 md:px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center"
              >
                Calculate ROI
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {!results ? (
              <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl flex items-center justify-center min-h-[600px]">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-400 text-lg">
                    Enter your metrics and click Calculate ROI to see your results
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Main ROI Card */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-4 md:p-8 text-white shadow-xl">
                  <h2 className="text-2xl font-bold mb-2">Your Potential ROI</h2>
                  <div className="text-6xl font-bold mb-4">{results.roi}%</div>
                  <p className="text-cyan-50 text-lg">
                    Payback period: <span className="font-bold">{results.paybackMonths} months</span>
                  </p>
                </div>

                {/* Detailed Breakdown */}
                <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Breakdown</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                      <div>
                        <p className="text-sm text-slate-600">Annual Revenue Increase</p>
                        <p className="text-xs text-slate-500 mt-1">
                          Conversion: {inputs.currentConversionRate}% → {results.newConversionRate.toFixed(1)}%
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-green-600">
                        ${results.annualRevenueIncrease.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                      <div>
                        <p className="text-sm text-slate-600">Time Savings Value</p>
                        <p className="text-xs text-slate-500 mt-1">
                          {results.hoursSavedPerYear.toFixed(0)} hours saved annually
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-green-600">
                        ${results.timeSavingsValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                      <p className="text-sm text-slate-600">Total Annual Benefit</p>
                      <p className="text-2xl font-bold text-cyan-600">
                        ${results.totalBenefit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                      <p className="text-sm text-slate-600">Annual Investment</p>
                      <p className="text-2xl font-bold text-slate-600">
                        ${results.annualInvestment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <p className="text-sm font-bold text-slate-900">Net Annual Benefit</p>
                      <p className="text-3xl font-bold text-cyan-600">
                        ${results.netBenefit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {[
                      'Increase conversion rates by 2-3%',
                      'Save 60% of time on manual tasks',
                      'Scale without adding headcount',
                      'Improve customer satisfaction',
                      'Data-driven decision making'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        {results && (
          <MiniCTA
            title="Ready to Get Started?"
            description={
              <>
                Join hundreds of companies achieving <b>{results.roi}% ROI</b> with our solution
              </>
            }
            buttonText="Schedule a Demo →"
            onClick={() => console.log("Demo scheduled")}
          />

        )}

      </div>
    </div>
  );
}