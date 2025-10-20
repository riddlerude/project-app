// src/app/about/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Tentang Kami
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Kami adalah tim yang berdedikasi untuk menciptakan solusi inovatif yang memecahkan masalah nyata dan memberikan nilai bagi pengguna kami.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle>Siapa Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Sekumpulan developer, desainer, dan pemikir strategis yang bersemangat dalam dunia teknologi dan inovasi produk.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle>Misi Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Misi kami adalah memberdayakan individu dan bisnis melalui teknologi yang mudah digunakan, efisien, dan andal.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle>Visi Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Menjadi pelopor dalam industri teknologi dengan terus berinovasi dan memberikan dampak positif bagi masyarakat global.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Temui Tim Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contoh Anggota Tim */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-200 mb-4 flex items-center justify-center">
              <span className="text-slate-500">Foto</span>
            </div>
            <h3 className="font-semibold text-lg">Nama Anggota 1</h3>
            <p className="text-sm text-muted-foreground">Jabatan</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-200 mb-4 flex items-center justify-center">
              <span className="text-slate-500">Foto</span>
            </div>
            <h3 className="font-semibold text-lg">Nama Anggota 2</h3>
            <p className="text-sm text-muted-foreground">Jabatan</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-200 mb-4 flex items-center justify-center">
              <span className="text-slate-500">Foto</span>
            </div>
            <h3 className="font-semibold text-lg">Nama Anggota 3</h3>
            <p className="text-sm text-muted-foreground">Jabatan</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-200 mb-4 flex items-center justify-center">
              <span className="text-slate-500">Foto</span>
            </div>
            <h3 className="font-semibold text-lg">Nama Anggota 4</h3>
            <p className="text-sm text-muted-foreground">Jabatan</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;