import Image from "next/image"
import { Award, Share2, UserCheck, Briefcase } from 'lucide-react'
import CertImage from "../../app/public/assets/cert.jpeg"
import EventImage1 from "../../app/public/assets/event-gallery/event-gallery-1.jpg"
import EventImage2 from "../../app/public/assets/event-gallery/event-gallery-2.jpg"
import EventImage3 from "../../app/public/assets/event-gallery/event-gallery-3.jpg"
import EventImage4 from "../../app/public/assets/event-gallery/event-gallery-4.jpg"
import CertScroll from "./subComponents/CertScroll"
export default function Component() {
  // Sample decorative images data - replace these with your actual image paths
  // const decorativeImages = {
  //   topLeft: EventImage1.src.toString(),
  //   topRight: EventImage2.src.toString(),
  //   bottomLeft: EventImage3.src.toString(),
  //   bottomRight: EventImage4.src.toString()
  // }

  return (
    <div className="max-w-6xl mx-auto p-6 lg:px-8">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content remains the same */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-white">Get <span className="text-[#ebff00]">Certified</span> & Recognised</h1>
              <p className="text-md text-muted-foreground text-white">
              Yes ! You will  be certified  once you complete the <span className="text-[#ffff00]">Capstone Project</span>  towards the end.
              </p>
            </div>
          
            <div className="grid gap-8">
              {/* Award section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Official and verified:</h3>
                  <p className="text-muted-foreground text-white">
                    Receive an instructor signed certificate with institution&apos;s logo to verify your achievements and increase your job prospects.
                  </p>
                </div>
              </div>

              {/* Share section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Easily shareable</h3>
                  <p className="text-muted-foreground text-white">
                    Add the certificate to your CV or your Resume or post it directly on LinkedIn. You can even post it on instagram and twitter.
                  </p>
                </div>
              </div>

              {/* UserCheck section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Enhances Credibility</h3>
                  <p className="text-muted-foreground text-white">
                    Use your certificate to enhance your professional credibility and stand out among your peers as an expert.
                  </p>
                </div>
              </div>

              {/* Briefcase section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">Increase potential opportunities</h3>
                  <p className="text-muted-foreground text-white">
                    By showcasing your achieved skill set using your certificate, attracting the employer for the desired job opportunities becomes easy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image section with enhanced decorative elements */}
          <div className="lg:sticky lg:top-8">
            <div className="relative mt-12">
              {/* Main certificate image */}
              <div className="relative rounded-lg border-2 border-orange-300 overflow-hidden aspect-[4/3] shadow-xl z-10">
                <Image
                  src={CertImage.src.toString()}
                  alt="Sample Certificate"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Additional decorative elements */}
              <div className="absolute -left-4 top-1/2 w-8 h-16 border-l-2 border-orange-300 rounded-l-full opacity-30 z-30" />
              <div className="absolute -right-4 top-1/2 w-8 h-16 border-r-2 border-orange-300 rounded-r-full opacity-30 z-30" />
              
              {/* Floating dots */}
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-orange-300 rounded-full opacity-60 z-30 animate-bounce" />
              <div className="absolute top-3/4 -right-8 w-4 h-4 bg-red-500 rounded-full opacity-60 z-30 animate-bounce" />
            </div>

            <div className="border mt-2 border-gray-200 rounded-xl p-2 shadow-sm bg-white backdrop-blur-sm">
          
            <div className="grid grid-cols-1 gap-8">
              <CertScroll />
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}