import React from 'react';

function Header({ profile }) {
    return (
        <header className="header glass">
            <img
                className="header__photo"
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&size=256&background=0f766e&color=fff&bold=true`}
                alt={`${profile.name} profile photo`}
            />

            <div>
                <p className="header__eyebrow">{profile.tags.join(' · ')}</p>
                <h1 className="header__name">{profile.name}</h1>
                <p className="header__bio">{profile.bio}</p>

                <div className="header__meta">
                    <span className="header__meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </span>
                    <span className="header__meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        {profile.phone}
                    </span>
                    <span className="header__meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    </span>
                    <span className="header__meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.69 2 6 2s6-.9 6-2v-5" /></svg>
                        {profile.education.institution} · {profile.education.degree}
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
