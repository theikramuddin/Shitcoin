
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, Send, BookCopy, Cpu } from 'lucide-react';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-lg hover:text-primary transition-colors">
    {children}
  </Link>
);

const DexScreenerEmbed = () => (
  <div>
    <style jsx>{`
      #dexscreener-embed {
        position: relative;
        width: 100%;
        padding-bottom: 125%;
      }
      @media(min-width:1400px) {
        #dexscreener-embed {
          padding-bottom: 65%;
        }
      }
      #dexscreener-embed iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 0;
      }
    `}</style>
    <div id="dexscreener-embed">
      <iframe src="https://dexscreener.com/solana/8oopi6gVFh4FA1mL5Jj35yRetfpmWiUDTfhCv31gkA3v?embed=1&loadChartSettings=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
    </div>
  </div>
);

export default function Home() {
  const contractAddress = "GaPbGp23pPuY9QBLPUjUEBn2MKEroTe9Q3M3f2Xpump";
  const memeImages = [
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342827/WhatsApp_Image_2025-09-08_at_4.28.54_PM_2_gultci.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342826/WhatsApp_Image_2025-09-08_at_4.28.55_PM_xsond8.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342826/WhatsApp_Image_2025-09-08_at_4.28.54_PM_zddqm0.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342826/WhatsApp_Image_2025-09-08_at_4.28.54_PM_1_yzo2jz.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342826/WhatsApp_Image_2025-09-08_at_4.28.55_PM_3_mdf5ww.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342826/WhatsApp_Image_2025-09-08_at_4.28.55_PM_1_m5ibd0.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342825/WhatsApp_Image_2025-09-08_at_4.28.57_PM_rie2ex.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342825/WhatsApp_Image_2025-09-08_at_4.28.52_PM_ip3j3r.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342826/WhatsApp_Image_2025-09-08_at_4.28.55_PM_2_qlnx9v.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342825/WhatsApp_Image_2025-09-08_at_4.28.56_PM_asmlps.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342825/WhatsApp_Image_2025-09-08_at_4.28.56_PM_2_vtjiwn.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342825/WhatsApp_Image_2025-09-08_at_4.28.53_PM_1_dmroii.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342825/WhatsApp_Image_2025-09-08_at_4.28.56_PM_1_svxsoe.jpg",
    "https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342824/WhatsApp_Image_2025-09-08_at_4.28.53_PM_nmylgk.jpg"
  ];


  return (
    <div className="flex flex-col min-h-screen font-body text-lg text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
            <Bot className="h-8 w-8" />
            Shitcoin
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#meme-gallery">Meme Gallery</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#how-to-buy">How to Buy</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground">
            <Link href="https://dexscreener.com/solana/8oopi6gvfh4fa1ml5jj35yretfpmwiudtfhcv31gka3v">Buy Now</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-32 text-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-16 md:py-24">
          <Image
            src="https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342824/WhatsApp_Image_2025-09-08_at_4.28.53_PM_nmylgk.jpg"
            alt="Shitcoin"
            data-ai-hint="logo abstract"
            width={400}
            height={400}
            className="mb-8 rounded-full border-4 border-primary shadow-[0_0_20px_theme(colors.primary)]"
            priority
          />
          <h1 className="font-headline text-7xl md:text-9xl font-bold text-primary flicker">
            Shitcoin
          </h1>
          <p className="mt-4 text-3xl md:text-4xl text-muted-foreground">
          Empowering the ultimate shit heads with Solana speed.
          </p>
          
          <div className="mt-12 w-full max-w-md">
            <div className="flex flex-col gap-4">
              <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="https://t.me/ShitcoinerSOL">TELEGRAM</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="https://t.me/ShitcoinerSOL">X</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 border-2 border-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="https://dexscreener.com/solana/8oopi6gvfh4fa1ml5jj35yretfpmwiudtfhcv31gka3v">DEX</Link>
              </Button>
              <Button asChild size="lg" className="text-lg py-6">
                <Link href="https://dexscreener.com/solana/8oopi6gvfh4fa1ml5jj35yretfpmwiudtfhcv31gka3v">BUY Shitcoin</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contract Address Section */}
        <section className="py-12">
            <Card className="max-w-2xl mx-auto bg-card/50 border-2 border-dashed border-primary/50">
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm">Shitcoin Contract Address</p>
                <p className="font-code text-primary text-sm md:text-lg break-all">{contractAddress}</p>
              </CardContent>
            </Card>
        </section>

        {/* Meme Gallery Section */}
        <section id="meme-gallery" className="py-24 max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">MEME GALLERY</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {memeImages.map((src, i) => (
                <CarouselItem key={i}>
                  <Image
                    src={src}
                    alt={`Meme ${i + 2}`}
                    data-ai-hint="funny meme"
                    width={600}
                    height={400}
                    className="rounded-lg border-2 border-primary/30 mx-auto object-cover aspect-[3/2]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 text-left max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-8 text-center">WHAT IS THE SHITCOIN</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-xl">
              <p>Shitcoin is just a shitcoin with 0 utility. We are here to basically sum up the whole crypto industry.</p>
              
            </div>
            <Image
              src="https://res.cloudinary.com/ds0ifdrhk/image/upload/v1757342826/WhatsApp_Image_2025-09-08_at_4.28.55_PM_2_qlnx9v.jpg"
              alt="Shitcoin abstract image"
              data-ai-hint="abstract technology"
              width={600}
              height={600}
              className="rounded-lg border-2 border-primary/30"
            />
          </div>
        </section>

        {/* How to Buy Section */}
        <section id="how-to-buy" className="py-24 max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">HOW DO I BUY YOUR SHITCOIN</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">1. CREATE A WALLET</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Download a crypto wallet like MetaMask or Phantom. Keep your seed phrase safer than a high score on Pac-Man.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">2. GET SOME SOL</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You'll need some SOL in your wallet to swap for Shitcoin. Get it from a centralized exchange or a friend who owes you one.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">3. SWAP FOR SHITCOIN</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Go to Jupiter, paste the Shitcoin contract address, and swap your SOL. Welcome to the mainframe.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-24 max-w-4xl mx-auto">
          <h2 className="font-headline text-5xl text-primary mb-12 text-center">ROADMAP</h2>
          <h3 className="font-headline text-5xl text-primary mb-12 text-center">WORLDWIDE SHITCOIN DOMINATION</h3>
          {/* <div className="relative border-l-2 border-primary/50 pl-8 space-y-16">
            <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-accent animate-pulse"></div>
            
            <div className="text-left">
              <h3 className="font-headline text-3xl text-accent mb-2">Phase 1: Boot Sequence</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Launch Shitcoin Token</li>
                <li>Website V1 Launch</li>
                <li>Community Building on X & Telegram</li>
                <li>CoinGecko/CoinMarketCap Listing</li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-headline text-3xl text-accent mb-2">Phase 2: Overclock</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>First CEX Listings</li>
                <li>Partnerships with other retro projects</li>
                <li>Claudeputer NFT Collection Drop</li>
                <li>10,000+ Holders</li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-headline text-3xl text-accent mb-2">Phase 3: Mainframe Integration</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Top Tier CEX Listings</li>
                <li>Develop a simple retro P2E game</li>
                <li>IRL Merch Store</li>
                <li>Global Domination (in a friendly way)</li>
              </ul>
            </div>
          </div> */}
        </section>

        {/* Live Chart Section */}
        <section id="live-chart" className="py-12">
          <h2 className="font-headline text-5xl text-primary mb-8 text-center">LIVE CHART</h2>
          <Card className="max-w-4xl mx-auto bg-card/50 border-2 border-primary/50">
            <CardContent className="p-2 md:p-4">
              <DexScreenerEmbed />
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="w-full text-center py-8 mt-12 border-t border-primary/20">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Shitcoin. All data loaded. This coin is for entertainment purposes only.</p>
      </footer>
    </div>
  );
}
    

    

    

    