import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const profileImage = "/attached_assets/generated_images/Student_profile_photo_16a8b43f.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <Avatar className="w-32 h-32 mx-auto">
              <AvatarImage src={profileImage} alt="個人照片" />
              <AvatarFallback>學生</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold" data-testid="text-name">wiwi</h1>
              <p className="text-xl text-muted-foreground">資訊工程系學生</p>
            </div>
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">關於我</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    大家好！我是一名資訊工程系的學生，對程式設計和數學充滿熱情。在學習的過程中，我發現將知識整理成筆記不僅能幫助自己加深理解，也能幫助其他同學學習。
                  </p>
                  <p>
                    因此我建立了這個學習筆記網站，希望能將我的學習心得和整理的資料分享給需要的人。這裡的筆記涵蓋了我在大學期間學習的各種科目，包括數學、程式設計、演算法等。
                  </p>
                  <p>
                    我相信知識的分享能創造更大的價值。如果這些筆記對你有幫助，歡迎在留言板留下你的想法和建議！
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-xl font-semibold">學習興趣</h3>
                <div className="flex flex-wrap gap-2">
                  {["前端開發", "演算法", "資料結構", "微積分", "線性代數", "機器學習"].map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-xl font-semibold">聯絡方式</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="gap-2" data-testid="button-email">
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                  <Button variant="outline" className="gap-2" data-testid="button-github">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="gap-2" data-testid="button-linkedin">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
