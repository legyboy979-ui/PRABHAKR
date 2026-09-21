import React, { useState } from 'react';
import { X, Printer, Download, Sparkles, User, GraduationCap, MapPin, Phone, Briefcase, FileText } from 'lucide-react';
import { BioDataProfile, Language } from '../types';

interface BioDataMakerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BioDataMakerModal: React.FC<BioDataMakerModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const [profile, setProfile] = useState<BioDataProfile>({
    fullName: 'राहुल कुमार (Rahul Kumar)',
    fatherName: 'श्री रामेश्वर प्रसाद (Shri Rameshwar Prasad)',
    motherName: 'श्रीमती शांति देवी (Smt. Shanti Devi)',
    dob: '15/08/2002',
    gender: 'Male / पुरुष',
    maritalStatus: 'Unmarried / अविवाहित',
    category: 'OBC / BC-II',
    religion: 'Hindu / हिन्दू',
    village: 'नगरपुरा (Nagarpura)',
    postOffice: 'नगरपुरा (Nagarpura)',
    policeStation: 'थाना नगरपुरा',
    district: 'बिहार (Bihar)',
    state: 'Bihar / बिहार',
    pincode: '800001',
    mobile: '8969627706',
    email: 'rahul.kumar@gmail.com',
    education10th: { school: 'High School Nagarpura', board: 'BSEB Patna', year: '2018', percentage: '76.4%', div: '1st Division' },
    education12th: { school: 'Inter College', board: 'BSEB Patna', year: '2020', percentage: '72.0%', div: '1st Division' },
    graduation: { college: 'University Degree College', university: 'Patna University', year: '2023', percentage: '68.5%', course: 'B.A. (History Hons)' },
    otherQual: 'DCA (Diploma in Computer Applications - 6 Months), Hindi & English Typing',
    skills: 'Computer MS Office, Internet Browsing, Online Form Filling, Tally Prime Basic, Customer Handling',
    experience: '1 Year Experience as Computer Operator / Cyber Assistant',
    languages: 'Hindi, Bhojpuri, English'
  });

  if (!isOpen) return null;

  const handlePrint = () => {
    setActiveTab('preview');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl p-5 sm:p-7 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 no-print">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                {lang === 'hi' ? 'बायोडाटा / रिज्यूम जनरेटर' : 'Bio-Data & CV Generator'}
              </span>
              <span className="text-xs text-slate-400">Prabhakar CS Centre</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
              {lang === 'hi' ? 'जॉब एवं विवाह हेतु बायोडाटा तैयार करें' : 'Create Job CV & Matrimonial Bio-Data'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'edit' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lang === 'hi' ? '✏️ विवरण भरें' : '✏️ Edit'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'preview' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lang === 'hi' ? '👁️ प्रीव्यू & प्रिंट' : '👁️ Preview'}
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'hi' ? 'प्रिंट करें' : 'Print'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="py-4 flex-1">
          {activeTab === 'edit' ? (
            <div className="space-y-5 text-xs">
              
              {/* Section 1: Personal Info */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>व्यक्तिगत विवरण (Personal Details)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">पूरा नाम (Full Name)</label>
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">पिता का नाम (Father's Name)</label>
                    <input
                      type="text"
                      value={profile.fatherName}
                      onChange={(e) => setProfile({ ...profile, fatherName: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">माता का नाम (Mother's Name)</label>
                    <input
                      type="text"
                      value={profile.motherName}
                      onChange={(e) => setProfile({ ...profile, motherName: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">जन्मतिथि (DOB)</label>
                    <input
                      type="text"
                      value={profile.dob}
                      onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">लिंग (Gender)</label>
                    <input
                      type="text"
                      value={profile.gender}
                      onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">वैवाहिक स्थिति</label>
                    <input
                      type="text"
                      value={profile.maritalStatus}
                      onChange={(e) => setProfile({ ...profile, maritalStatus: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">श्रेणी (Category)</label>
                    <input
                      type="text"
                      value={profile.category}
                      onChange={(e) => setProfile({ ...profile, category: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Contact & Address */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>स्थायी पता एवं संपर्क (Address & Contact)</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">गाँव (Village)</label>
                    <input
                      type="text"
                      value={profile.village}
                      onChange={(e) => setProfile({ ...profile, village: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">डाकघर (Post Office)</label>
                    <input
                      type="text"
                      value={profile.postOffice}
                      onChange={(e) => setProfile({ ...profile, postOffice: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">थाना (Police Station)</label>
                    <input
                      type="text"
                      value={profile.policeStation}
                      onChange={(e) => setProfile({ ...profile, policeStation: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">पिन कोड (PIN)</label>
                    <input
                      type="text"
                      value={profile.pincode}
                      onChange={(e) => setProfile({ ...profile, pincode: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">मोबाइल नंबर (Mobile)</label>
                    <input
                      type="text"
                      value={profile.mobile}
                      onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-600 mb-1 block">ईमेल (Email)</label>
                    <input
                      type="text"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Qualifications */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                  <span>शैक्षणिक योग्यता (Educational Qualifications)</span>
                </div>

                {/* 10th */}
                <div className="grid grid-cols-4 gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                  <div>
                    <label className="font-semibold text-slate-500 text-[10px] block">10th School</label>
                    <input
                      type="text"
                      value={profile.education10th.school}
                      onChange={(e) => setProfile({ ...profile, education10th: { ...profile.education10th, school: e.target.value } })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-500 text-[10px] block">Board</label>
                    <input
                      type="text"
                      value={profile.education10th.board}
                      onChange={(e) => setProfile({ ...profile, education10th: { ...profile.education10th, board: e.target.value } })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-500 text-[10px] block">Year</label>
                    <input
                      type="text"
                      value={profile.education10th.year}
                      onChange={(e) => setProfile({ ...profile, education10th: { ...profile.education10th, year: e.target.value } })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-500 text-[10px] block">% / Div</label>
                    <input
                      type="text"
                      value={profile.education10th.percentage}
                      onChange={(e) => setProfile({ ...profile, education10th: { ...profile.education10th, percentage: e.target.value } })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                </div>

                {/* 12th */}
                <div className="grid grid-cols-4 gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                  <div>
                    <label className="font-semibold text-slate-500 text-[10px] block">12th College</label>
                    <input
                      type="text"
                      value={profile.education12th.school}
                      onChange={(e) => setProfile({ ...profile, education12th: { ...profile.education12th, school: e.target.value } })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-500 text-[10px] block">Board</label>
                    <input
                      type="text"
                      value={profile.education12th.board}
                      onChange={(e) => setProfile({ ...profile, education12th: { ...profile.education12th, board: e.target.value } })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-500 text-[10px] block">Year</label>
                    <input
                      type="text"
                      value={profile.education12th.year}
                      onChange={(e) => setProfile({ ...profile, education12th: { ...profile.education12th, year: e.target.value } })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-500 text-[10px] block">% / Div</label>
                    <input
                      type="text"
                      value={profile.education12th.percentage}
                      onChange={(e) => setProfile({ ...profile, education12th: { ...profile.education12th, percentage: e.target.value } })}
                      className="w-full text-xs font-medium"
                    />
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="font-semibold text-slate-600 mb-1 block">कंप्यूटर ज्ञान व अन्य कौशल (Skills)</label>
                  <input
                    type="text"
                    value={profile.skills}
                    onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

            </div>
          ) : (
            /* Printable Clean A4 Format Preview */
            <div className="bg-white border-2 border-slate-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto font-serif text-slate-900 printable-area">
              
              {/* Bio-Data Title Header */}
              <div className="text-center pb-4 border-b-2 border-slate-800 mb-6">
                <h1 className="text-2xl font-black uppercase tracking-wider text-slate-900">
                  CURRICULUM VITAE / बायोडाटा
                </h1>
                <p className="text-xs text-slate-600 mt-0.5">
                  Prabhakar Online CS Centre Nagarpura Format
                </p>
              </div>

              {/* Personal Details Section */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                <div>
                  <h3 className="font-bold text-xs bg-slate-100 p-1.5 uppercase tracking-wide border-l-4 border-slate-800 mb-2">
                    1. PERSONAL DETAILS / व्यक्तिगत विवरण
                  </h3>
                  <table className="w-full text-xs border-collapse">
                    <tbody>
                      <tr className="border-b border-slate-200">
                        <td className="py-1.5 font-bold w-1/3">Full Name / नाम:</td>
                        <td className="py-1.5 font-semibold text-slate-900">{profile.fullName}</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-1.5 font-bold">Father's Name / पिता का नाम:</td>
                        <td className="py-1.5">{profile.fatherName}</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-1.5 font-bold">Mother's Name / माता का नाम:</td>
                        <td className="py-1.5">{profile.motherName}</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-1.5 font-bold">Date of Birth / जन्मतिथि:</td>
                        <td className="py-1.5">{profile.dob}</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-1.5 font-bold">Gender & Marital Status:</td>
                        <td className="py-1.5">{profile.gender} | {profile.maritalStatus}</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-1.5 font-bold">Category & Religion:</td>
                        <td className="py-1.5">{profile.category} | {profile.religion}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Address */}
                <div>
                  <h3 className="font-bold text-xs bg-slate-100 p-1.5 uppercase tracking-wide border-l-4 border-slate-800 mb-2">
                    2. PERMANENT ADDRESS & CONTACT / पता
                  </h3>
                  <p className="text-xs leading-relaxed">
                    <strong>Village:</strong> {profile.village}, <strong>Post Office:</strong> {profile.postOffice},<br />
                    <strong>P.S.:</strong> {profile.policeStation}, <strong>District:</strong> {profile.district}, <strong>PIN:</strong> {profile.pincode}<br />
                    <strong>Mobile:</strong> {profile.mobile} | <strong>Email:</strong> {profile.email}
                  </p>
                </div>

                {/* Educational Qualifications */}
                <div>
                  <h3 className="font-bold text-xs bg-slate-100 p-1.5 uppercase tracking-wide border-l-4 border-slate-800 mb-2">
                    3. EDUCATIONAL QUALIFICATIONS / शैक्षणिक योग्यता
                  </h3>
                  <table className="w-full text-xs border border-slate-400 text-center border-collapse">
                    <thead>
                      <tr className="bg-slate-200 font-bold">
                        <th className="border border-slate-400 p-1.5">Exam</th>
                        <th className="border border-slate-400 p-1.5">Board/University</th>
                        <th className="border border-slate-400 p-1.5">Passing Year</th>
                        <th className="border border-slate-400 p-1.5">% / Division</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-400 p-1 font-semibold">10th / Matric</td>
                        <td className="border border-slate-400 p-1">{profile.education10th.board}</td>
                        <td className="border border-slate-400 p-1">{profile.education10th.year}</td>
                        <td className="border border-slate-400 p-1">{profile.education10th.percentage}</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-1 font-semibold">12th / Inter</td>
                        <td className="border border-slate-400 p-1">{profile.education12th.board}</td>
                        <td className="border border-slate-400 p-1">{profile.education12th.year}</td>
                        <td className="border border-slate-400 p-1">{profile.education12th.percentage}</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-400 p-1 font-semibold">Graduation</td>
                        <td className="border border-slate-400 p-1">{profile.graduation.university}</td>
                        <td className="border border-slate-400 p-1">{profile.graduation.year}</td>
                        <td className="border border-slate-400 p-1">{profile.graduation.percentage}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Skills & Declaration */}
                <div>
                  <h3 className="font-bold text-xs bg-slate-100 p-1.5 uppercase tracking-wide border-l-4 border-slate-800 mb-2">
                    4. COMPUTER SKILLS & LANGUAGES / कौशल
                  </h3>
                  <p className="text-xs"><strong>Skills:</strong> {profile.skills}</p>
                  <p className="text-xs mt-1"><strong>Languages:</strong> {profile.languages}</p>
                </div>

                {/* Sign off */}
                <div className="pt-8 flex justify-between items-end text-xs">
                  <div>
                    <p>Date: _______________</p>
                    <p>Place: Nagarpura</p>
                  </div>
                  <div className="text-center">
                    <p className="border-t border-slate-600 pt-1 px-4 font-bold">
                      Signature of Applicant
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between no-print">
          <span className="text-xs text-slate-500">
            {lang === 'hi' ? 'प्रिंट लेने के लिए A4 पेपर का उपयोग करें।' : 'Ready to print on standard A4 paper.'}
          </span>
          <button
            onClick={handlePrint}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>{lang === 'hi' ? 'बायोडाटा प्रिंट करें' : 'Print Bio-Data'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
