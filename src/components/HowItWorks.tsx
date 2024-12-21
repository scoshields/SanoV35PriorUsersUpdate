import React from 'react';
import { HelpCircle, X } from 'lucide-react';

interface HowItWorksProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowItWorks({ isOpen, onClose }: HowItWorksProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">How Sano Works</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6 text-gray-600">
            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p>
                Sano is your clinical documentation assistant, designed to help mental health professionals create comprehensive and professional clinical notes efficiently.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Choose Your Documentation Type</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Session Notes:</strong> For documenting regular therapy sessions</li>
                <li><strong>Assessment Notes:</strong> For initial assessments and evaluations</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Session Notes Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Therapy Approaches:</strong> Choose from multiple therapy modalities to tailor documentation</li>
                <li><strong>Client Concerns:</strong> Document presenting problems and symptoms</li>
                <li><strong>Clinical Observations:</strong> Record client's presentation and behavior</li>
                <li><strong>Client Response:</strong> Track engagement and progress</li>
                <li><strong>Plan Next Steps:</strong> Document homework and future session focus</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Documentation Formats</h3>
              <p className="mb-3">Choose from multiple professional documentation formats:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>GIRP Format:</strong> Goals, Intervention, Response, Plan - Standard format focusing on session goals and outcomes</li>
                <li><strong>DAP Format:</strong> Description, Assessment, Plan - Concise format for describing session content</li>
                <li><strong>BIRP Format:</strong> Behavior, Intervention, Response, Plan - Focuses on observed behaviors</li>
                <li><strong>SOAP Format:</strong> Subjective, Objective, Assessment, Plan - Medical-style comprehensive format</li>
                <li><strong>PIRP Format:</strong> Problem, Intervention, Response, Plan - Problem-focused approach</li>
                <li><strong>RIFT Format:</strong> Reason, Intervention, Feedback, Therapy goals - Goal-oriented format</li>
                <li><strong>CARE Format:</strong> Client, Assessment, Response, Evaluation - Client-centered progress format</li>
                <li><strong>STOP Format:</strong> Summary, Treatment, Observation, Plan - Structured approach</li>
                <li><strong>MINT Format:</strong> Motivation, Issues, Next steps, Therapeutic tools - Focus on motivation</li>
                <li><strong>FORT Format:</strong> Focus, Outcome, Response, Tactics - Outcome-focused format</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Documentation Modes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Free Form:</strong> Write notes directly with support from quick-insert options</li>
                <li><strong>Guided Mode:</strong> Use structured questions for comprehensive documentation</li>
                <li><strong>Selected Items:</strong> View and track all checked items in one place</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Using Quick Actions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Checkboxes (✓):</strong> Add items to the "Selected Note Items" section for inclusion in the final documentation</li>
                <li><strong>Plus Button (+):</strong> Insert text directly at the cursor position in your notes</li>
                <li><strong>Collapsible Sections:</strong> Click section headers to expand/collapse for better organization</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment Notes Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Structured format for comprehensive client assessments</li>
                <li>Guided questions covering demographics, presenting problems, and clinical observations</li>
                <li>Produces detailed clinical assessments with diagnostic impressions</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Refining Your Notes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Review the processed output</li>
                <li>Use the "Refine Output" option to make adjustments</li>
                <li>Add specific instructions for modifications</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Choose the appropriate documentation format for your needs</li>
                <li>Use the regenerate option to refine specific sections</li>
                <li>Use checkboxes to track important observations and plans</li>
                <li>Utilize the + button for quick text insertion</li>
                <li>Be specific and detailed in your responses</li>
                <li>Review and verify all clinical information</li>
                <li>Always maintain client confidentiality</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-gray-900 mb-2">Section Management</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Version History:</strong> Track changes with multiple versions of each section</li>
                <li><strong>Regenerate Sections:</strong> Refine individual sections while maintaining others</li>
                <li><strong>Format Consistency:</strong> Each section maintains proper clinical documentation standards</li>
                <li><strong>Professional Language:</strong> All content uses appropriate clinical terminology</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}