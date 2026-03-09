import { Mail, Phone, Linkedin, GraduationCap } from 'lucide-react';
import { GlassPanel } from '../ui/GlassPanel';
import type { Profile } from '../../types/resume';

interface HeaderProps {
  profile: Profile;
}

export function Header({ profile }: HeaderProps) {
  return (
    <GlassPanel as="header" className="relative overflow-hidden mb-5">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-sky-500 rounded-t-2xl" />

      <div className="grid grid-cols-[120px_1fr] gap-5 p-5 max-md:grid-cols-1 max-md:text-center">
        <img
          className="w-[120px] h-[120px] rounded-xl object-cover border-2 border-border-accent shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] max-md:w-24 max-md:h-24 max-md:mx-auto"
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&size=256&background=0f766e&color=fff&bold=true`}
          alt={`${profile.name} profile photo`}
        />

        <div>
          <p className="text-accent text-xs font-semibold tracking-wider uppercase">
            {profile.tags.join(' · ')}
          </p>
          <h1 className="text-3xl max-sm:text-2xl font-extrabold mt-1 mb-1.5 bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <div className="mt-2 mb-3 flex flex-wrap gap-y-2 gap-x-4 text-muted text-sm max-md:justify-center">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <a
                href={`mailto:${profile.email}`}
                className="text-link hover:text-accent transition-colors no-underline hover:underline"
              >
                {profile.email}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              {profile.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-link hover:text-accent transition-colors no-underline hover:underline"
              >
                LinkedIn
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              {profile.education.institution} · {profile.education.degree}
            </span>
          </div>

          <div className="text-text-secondary text-[0.88rem] leading-relaxed space-y-2">
            {profile.bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
