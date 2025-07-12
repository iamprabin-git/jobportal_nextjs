import { useState, useEffect } from 'react';
import teamMembers from '@/constants/teamMember';
import Link from 'next/link';
import Image from 'next/image';

function TeamMember() {
  const [isVisible, setIsVisible] = useState(false);
  
  const members = Array.isArray(teamMembers) 
    ? teamMembers 
    : teamMembers?.default || [];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-slate-800" aria-labelledby="team-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 id="team-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Leadership Team
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 dark:text-slate-300">
            The passionate professionals driving our vision forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className={`h-96 ${ // Fixed height for consistent cards
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Flip card container */}
              <div className="group w-full h-full [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front side */}
                  <div className="absolute inset-0 bg-white dark:bg-slate-700 rounded-xl shadow-md [backface-visibility:hidden]">
                    <div className="h-40 md:h-48 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 relative">
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 bg-gray-200 dark:bg-slate-600 flex items-center justify-center overflow-hidden">
                        {member.image ? (
                          <Image
                            src={member.image} 
                            alt={`${member.name}`} 
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16" />
                        )}
                      </div>
                    </div>
                    
                    <div className="pt-16 pb-8 px-6 text-center">
                      <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">{member.name}</h3>
                      <p className="text-gray-600 dark:text-slate-400">{member.role}</p>
                    </div>
                  </div>

                  {/* Back side */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-gray-400 dark:to-gray-500 rounded-xl shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                    <p className="text-blue-100 mb-4">{member.role}</p>
                    
                    {member.contact && (
                      <div className="mb-4 text-blue-50">
                        <p className="text-sm">{member.contact.email}</p>
                        <p className="text-sm">{member.contact.phone}</p>
                      </div>
                    )}

                    <div className="flex justify-center space-x-3 mt-4">
                      {member.social?.map((social, idx) => (
                        <Link
                          key={idx}
                          href={social.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full bg-blue-500/30 hover:bg-blue-400 flex items-center justify-center hover:scale-110 transition-all duration-300"
                        >
                          <span className="text-white text-lg">
                            {social.icon}
                          </span>
                        </Link>
                      ))}
                    </div>
                    
                    {member.bio && (
                      <p className="text-blue-100 text-sm mt-4 line-clamp-3">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMember;