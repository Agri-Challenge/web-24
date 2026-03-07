'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle, Loader2, ShieldCheck, Ban, Share2, BookOpen, AlertTriangle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface FormData {
  fullName: string;
  email: string;
  institution: string;
  position: string;
  purpose: string;
  agreed: boolean;
}

const initialForm: FormData = {
  fullName: '',
  email: '',
  institution: '',
  position: '',
  purpose: '',
  agreed: false,
};

export default function RequestAccess() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'A valid email address is required.';
    if (!form.institution.trim()) errs.institution = 'Institution is required.';
    if (!form.position) errs.position = 'Please select your position.';
    if (!form.purpose.trim() || form.purpose.trim().length < 20)
      errs.purpose = 'Please describe your research purpose (at least 20 characters).';
    if (!form.agreed) errs.agreed = 'You must agree to the terms.' as unknown as boolean;
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          institution: form.institution,
          position: form.position,
          purpose: form.purpose,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setErrors({ fullName: 'Submission failed. Please try again or contact us directly.' });
      }
    } catch {
      setErrors({ fullName: 'Network error. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (err?: string | boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-[#10243D] bg-white placeholder-[#5A7A8A]/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#1CC9A9]/40 focus:border-[#1CC9A9] ${
      err ? 'border-red-400 bg-red-50/30' : 'border-[#E8EEEE] hover:border-[#94CCC6]'
    }`;

  return (
    <section
      id="request-access"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="request-access-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Request Dataset Access"
            subtitle="The AgrI Challenge dataset is available for non-commercial research purposes. Submit a request and we will review it and contact you."
            centered
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-2xl mx-auto">
            {/* Intro card */}
            <div
              className="mb-6 p-5 rounded-xl bg-white border border-[#E8EEEE] text-sm text-[#5A7A8A] leading-relaxed"
              style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.05)' }}
            >
              <p>
                The dataset contains <strong className="text-[#10243D]">50,673 field images</strong> of
                6 tree species collected by 12 teams under the AgrI Challenge framework.
                Access is granted for academic and research use only. Upon submission, your
                request will be reviewed and you will receive a response at the provided email
                address.
              </p>
            </div>

            {/* License & Access Conditions */}
            <div
              className="mb-8 rounded-xl border border-[#E8EEEE] overflow-hidden"
              style={{ boxShadow: '0 2px 12px rgba(16,36,61,0.05)' }}
            >
              <div className="bg-[#10243D] px-5 py-3 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#1CC9A9]" strokeWidth={1.5} />
                <span className="text-sm font-bold text-white">Data License &amp; Access Conditions</span>
              </div>
              <div className="bg-white px-5 py-5">
                <p className="text-xs text-[#5A7A8A] mb-4 leading-relaxed">
                  By requesting access to the AgrI Challenge dataset you agree to all of the following conditions:
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    {
                      icon: Ban,
                      color: 'text-red-400',
                      bg: 'bg-red-50',
                      title: 'Non-Commercial Use Only',
                      desc: 'The dataset may only be used for academic, educational, and non-commercial research purposes. Any commercial use, including but not limited to product development, commercial services, or for-profit applications, is strictly prohibited.',
                    },
                    {
                      icon: Share2,
                      color: 'text-amber-500',
                      bg: 'bg-amber-50',
                      title: 'No Redistribution',
                      desc: 'You may not share, publish, redistribute, sublicense, or make the dataset (or any portion of it) publicly available in any form. If a collaborator requires access, they must submit their own individual request to the authors.',
                    },
                    {
                      icon: BookOpen,
                      color: 'text-[#1CC9A9]',
                      bg: 'bg-[#1CC9A9]/10',
                      title: 'Mandatory Citation',
                      desc: 'Any publication, report, or presentation that uses or references this dataset must cite the AgrI Challenge paper. See the Citation section for the correct BibTeX and APA formats.',
                    },
                    {
                      icon: AlertTriangle,
                      color: 'text-[#10243D]',
                      bg: 'bg-[#10243D]/5',
                      title: 'No Derivative Datasets',
                      desc: 'You may not create and distribute datasets derived from the AgrI Challenge data without explicit written permission from the corresponding author (mohamed.brahimi@ensia.edu.dz).',
                    },
                    {
                      icon: ShieldCheck,
                      color: 'text-indigo-500',
                      bg: 'bg-indigo-50',
                      title: 'Responsible Use',
                      desc: 'The dataset must be used in a manner consistent with applicable privacy laws and ethical research standards. You are responsible for ensuring your use complies with your institution\'s policies.',
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1.5 rounded-lg ${item.bg} shrink-0`}>
                          <Icon size={13} className={item.color} strokeWidth={2} />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-[#10243D]">{item.title}. </span>
                          <span className="text-xs text-[#5A7A8A] leading-relaxed">{item.desc}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Success state */}
            {submitted ? (
              <div
                className="p-10 rounded-2xl bg-white border border-[#1CC9A9]/30 text-center"
                style={{ boxShadow: '0 8px 40px rgba(28,201,169,0.12)' }}
                role="alert"
              >
                <CheckCircle size={48} className="text-[#1CC9A9] mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-bold text-[#10243D] text-xl mb-2">Request Received</h3>
                <p className="text-[#5A7A8A] leading-relaxed">
                  Your request has been received. We will review it and contact you by email.
                </p>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl p-8 border border-[#E8EEEE]"
                style={{ boxShadow: '0 4px 24px rgba(16,36,61,0.07)' }}
              >
                <div className="flex flex-col gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-[#10243D] mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className={inputClass(errors.fullName)}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-err' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-err" className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#10243D] mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@university.edu"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass(errors.email)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                    />
                    {errors.email && (
                      <p id="email-err" className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Institution */}
                  <div>
                    <label htmlFor="institution" className="block text-sm font-semibold text-[#10243D] mb-1.5">
                      Institution / University <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="institution"
                      type="text"
                      autoComplete="organization"
                      placeholder="University of ..."
                      value={form.institution}
                      onChange={(e) => setForm({ ...form, institution: e.target.value })}
                      className={inputClass(errors.institution)}
                      aria-invalid={!!errors.institution}
                      aria-describedby={errors.institution ? 'institution-err' : undefined}
                    />
                    {errors.institution && (
                      <p id="institution-err" className="mt-1.5 text-xs text-red-500">{errors.institution}</p>
                    )}
                  </div>

                  {/* Position */}
                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-[#10243D] mb-1.5">
                      Position <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="position"
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className={`${inputClass(errors.position)} cursor-pointer`}
                      aria-invalid={!!errors.position}
                    >
                      <option value="">Select your position…</option>
                      <option value="phd">PhD Student</option>
                      <option value="postdoc">Postdoc</option>
                      <option value="researcher">Researcher</option>
                      <option value="professor">Professor</option>
                      <option value="industry">Industry</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.position && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.position}</p>
                    )}
                  </div>

                  {/* Research Purpose */}
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-semibold text-[#10243D] mb-1.5">
                      Research Purpose <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="purpose"
                      rows={4}
                      placeholder="Briefly describe your intended use of the dataset and your research context…"
                      value={form.purpose}
                      onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                      className={`${inputClass(errors.purpose)} resize-y min-h-[100px]`}
                      aria-invalid={!!errors.purpose}
                      aria-describedby={errors.purpose ? 'purpose-err' : undefined}
                    />
                    {errors.purpose && (
                      <p id="purpose-err" className="mt-1.5 text-xs text-red-500">{errors.purpose}</p>
                    )}
                  </div>

                  {/* Agree */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={form.agreed}
                          onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                          className="sr-only peer"
                          aria-describedby={errors.agreed ? 'agreed-err' : undefined}
                        />
                        <div className="w-5 h-5 rounded-md border-2 border-[#E8EEEE] peer-checked:bg-[#1CC9A9] peer-checked:border-[#1CC9A9] transition-all duration-200 flex items-center justify-center group-hover:border-[#94CCC6]">
                          {form.agreed && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-[#5A7A8A] leading-relaxed">
                        I have read and agree to the <strong className="text-[#10243D]">data license and access conditions</strong> above, including non-commercial use only, no redistribution, and mandatory citation of the AgrI Challenge paper in any publication using this dataset.
                      </span>
                    </label>
                    {errors.agreed && (
                      <p id="agreed-err" className="mt-1.5 text-xs text-red-500">
                        {errors.agreed as unknown as string}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 w-full py-3.5 px-8 bg-[#1CC9A9] text-white font-bold text-sm rounded-xl hover:bg-[#17b396] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      'Submit Access Request'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
