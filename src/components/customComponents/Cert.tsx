import Image from "next/image"
import { Award, Share2, UserCheck, Briefcase } from 'lucide-react'
import CertImage from "../../app/public/assets/cert.png"
export default function Component() {
  return (
    <div className="max-w-6xl mx-auto p-6 lg:px-8">
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Get Certified</h1>
            <p className="text-lg text-muted-foreground">
              Yes! You will be <span className="text-red-500">certified</span> for this training once you submit the task given, if any
            </p>
          </div>
          
          <div className="grid gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Official and verified:</h3>
                <p className="text-muted-foreground">
                  Receive an instructor signed certificate with institution&apos;s logo to verify your achievements and increase your job prospects
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Easily shareable</h3>
                <p className="text-muted-foreground">
                  Add the certificate to your CV or your Resume or post it directly on LinkedIn. You can even post it on instagram and twitter.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Enhances Credibility</h3>
                <p className="text-muted-foreground">
                  Use your certificate to enhance your professional credibility and stand out among your peers as an expert
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Increase potential opportunities</h3>
                <p className="text-muted-foreground">
                  By showcasing your achieved skill set using your certificate, attracting the employer for the desired job opportunities becomes easy
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8">
          <div className="rounded-lg border-2 border-orange-300 overflow-hidden">
            <Image
              src={CertImage.src.toString()}
              alt="Sample Certificate"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}