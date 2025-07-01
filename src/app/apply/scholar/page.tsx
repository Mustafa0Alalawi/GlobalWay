"use client";

import { useState } from "react";

const questions = [
  { id: "name", label: "What is your full name?" },
  { id: "email", label: "What is your email address?" },
  { id: "reason", label: "Why are you applying?" },
];

export default function ScholarApplyPage() {
  const [step, setStep] = useState(0); // 0 = show Apply button
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const currentQuestion = questions[step - 1];

  const handleNext = () => {
    if (step <= questions.length) setStep(step + 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAnswers({ ...answers, [currentQuestion.id]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", answers);
    alert("Submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 to-white text-black">
      {/* Left Side: Video */}
      <div className="w-full md:w-1/2 h-72 md:h-screen overflow-hidden">
        <video
          src="/hero-video.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white/80 backdrop-blur-md">
        <div className="w-full max-w-md text-center space-y-6">
          {step === 0 && (
            <button
              onClick={() => setStep(1)}
              className="bg-blue-500 text-white text-xl font-bold px-6 py-3 rounded-full shadow hover:bg-blue-600 transition"
            >
              Apply Now
            </button>
          )}

          {step > 0 && step <= questions.length && currentQuestion && (
            <>
              <h2 className="text-xl font-semibold text-[#247e9f]">
                {currentQuestion.label}
              </h2>
              {currentQuestion.id === "reason" ? (
                <textarea
                  name={currentQuestion.id}
                  value={answers[currentQuestion.id] || ""}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border px-4 py-2 rounded-md shadow"
                />
              ) : (
                <input
                  name={currentQuestion.id}
                  value={answers[currentQuestion.id] || ""}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md shadow"
                />
              )}

              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className="bg-[#247e9f] text-white px-6 py-2 rounded-md font-medium hover:bg-[#1e6d88] transition disabled:opacity-50"
              >
                Next
              </button>
            </>
          )}

          {step > questions.length && (
            <>
              <h2 className="text-xl font-semibold text-[#247e9f] mb-4">
                Ready to submit?
              </h2>
              <pre className="text-left bg-gray-100 p-4 rounded text-sm">
                {JSON.stringify(answers, null, 2)}
              </pre>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition"
              >
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
