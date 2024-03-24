import Image from "next/image";
import { Inter } from "next/font/google";
import backups from "public/static/Backups.png"
import ddosProtection from "public/static/DDOS_Protection.png"
import edgeNetwork from "public/static/Edge_Network.png"
import security from "public/static/Security.png"
import edgeNetworkMap from "public/static/Edge_Network_Map.png"
import backgroundWaves from "public/static/Background_Waves.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <section className="p-6">
        <div className="flex justify-center items-center w-full pb-6">
          <div className="w-[525px]">
            <h2>Cloud computing Developers trust</h2>
            <h4>Build, run, and secure your cloud workloads on <strong>SuperNet Connected Cloud,</strong> a massively distributed edge and cloud platform. <a href="#" className="link">Sign up</a> today or <a className="link" href="#">contact us</a> to learn more.</h4>
          </div>

          <div className="w-[502px] p-[64px] bg-[#313131] flex flex-col justify-center items-center rounded-lg">
            <button className="btn btn-primary w-[360px] mb-6">Sign up with Google</button>
            <button className="btn btn-secondary w-[360px] mb-6">Github</button>
            <button className="btn btn-secondary w-[360px] mb-6">Email</button>
            <p className="w-[378px] text-center">By providing your email address or using a single sign-on provider to create an account, you agree to our <a className="link">Terms of Service</a> and that you have reviewed our <a className="link">Privacy Policy</a> and <a className="link">Cookie Policy.</a></p>
          </div>
        </div>
      </section>

      <section className="justify-center items-center w-full pb-6 pt-12 px-12">
        <div className="items-center justify-center m-auto w-[607px] text-center pb-12">
          <h2 className="mb-6">Features</h2>
          <h4>From edge locations world wide, to unparalleled security and DDOS protection, we've got you covered.</h4>
        </div>

        <div className="grid gap-12 grid-cols-2">

          <div className="flex">
            <div className="text-center">
              <h3>Edge Network</h3>
              <p>Discover our industry leading edge network, with over 300 edge nodes scattered around the globe.</p>
              <p>Give your customers the best performance in every corner of the world.</p>
            </div>
            <div>
              <figure className="overlay">
                <Image src={edgeNetwork} alt="Edge Network" />
              </figure>
            </div>
          </div>

          <div className="flex">
            <div className="text-center">
              <h3>Security</h3>
              <p>Stay safe from threats without slowing down.</p>
              <p>SuperNet surrounds and protects your entire ecosystem — clouds, apps, APIs, and users.</p>
            </div>
            <div>
              <figure className="overlay">
                <Image src={security} alt="Edge Network" />
              </figure>
            </div>
          </div>

          <div className="grid grid-cols-5">
            <div className="text-center col-span-3">
              <h3 className="mb-2">DDOS Protection</h3>
              <p className="mb-1">Highly rated web, application & network DDoS protection.</p>
              <p>Keeping bots and malicious users at bay.</p>
            </div>
            <div className="col-span-2">
              <figure className="overlay">
                <Image src={ddosProtection}alt="Edge Network" />
              </figure>
            </div>
          </div>

          <div className="flex">
            <div className="text-center">
              <h3>Backups</h3>
              <p>Fully managed automatic daily, weekly, and biweekly backups of your Compute Instances.</p>
              <p>Have peace of mind knowing that your data is always safe.</p>
            </div>
            <div>
              <figure className="overlay">
                <Image src={backups} alt="Edge Network" />
              </figure>
            </div>
          </div>

        </div>
      </section>

      <section className="justify-center items-center w-full pb-6 pt-12 px-12">
        <div className="items-center justify-center m-auto w-[834px] text-center pb-12">
          <h2 className="mb-6">Edge Network</h2>
          <h4>Scale your business on the most distributed compute, security, and delivery platform — from cloud to edge. New core compute regions launched. <a className="link" href="#">Learn more.</a></h4>
        </div>

        <div className="w-full h-auto">
          <Image src={edgeNetworkMap} alt="Edge Network Map" />
        </div>
      </section>

      <section className="items-center justify-center">
        <div className="items-center justify-center m-auto w-[784px] text-center pb-12">
          <h2 className="mb-6">Pricing</h2>
          <h4>Cut your cloud bills in half with bundled extras like DDoS Protection, cloud firewalls, and generous transfer.</h4>
        </div>

        <div className="grid gap-x-16 grid-cols-3 w-[66%] m-auto">
          <div className="bg-[#313131]">
            <p className="price standard">$9/mo<br />Standard</p>
          </div>
          <div className="bg-[#313131]">
            <p className="price professional">$49/mo<br />Professional</p>
          </div>
          <div className="bg-[#313131]">
            <p className="price enterprise">$159/mo<br />Enterprise</p>
          </div>

          <div className="h-fit">
            <Image 
              src={backgroundWaves} 
              width={0} 
              height={0} 
              alt="Waves" 
              sizes="100vw" 
              style={{ width: '100%', height: 'auto' }} 
            /> 
          </div>
          <div className="h-fit">
          <Image 
              src={backgroundWaves} 
              width={0} 
              height={0} 
              alt="Waves" 
              sizes="100vw" 
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>
          <div className="h-fit">
          <Image 
              src={backgroundWaves} 
              width={0} 
              height={0} 
              alt="Waves" 
              sizes="100vw" 
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className="planSpecsWrapper">
            <p>10GB Of space</p><br />
            <p>Unlimited traffic</p><br />
            <p>Forum Access</p><br />
            <p>Support at $25/hour</p><br />
          </div>
          <div className="planSpecsWrapper">
            <p>10GB Of space</p><br />
            <p>Unlimited traffic</p><br />
            <p>Forum Access</p><br />
            <p>Support at $25/hour</p><br />
          </div>
          <div className="planSpecsWrapper">
            <p>10GB Of space</p><br />
            <p>Unlimited traffic</p><br />
            <p>Forum Access</p><br />
            <p>Support at $25/hour</p><br />
          </div>

        </div>
      </section>
    </main>
  );
}
