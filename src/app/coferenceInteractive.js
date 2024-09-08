'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

const ConferenceDashboard = ({ onClose }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const containerRef = useRef(null);

  const conferences = [
    {
      year: "2024",
      name: "SLASH 24",
      date: "2024년 4월 25일",
      attendees: 5000,
      keywords: ["AI", "블록체인", "클라우드"],
      highlights: "블록체인 기술을 활용한 새로운 금융 서비스 발표",
      sessions: [
        { title: "토스페이먼츠 대규모 시스템 설계", speaker: "김토스" },
        { title: "토스증권 초저지연 시스템 아키텍처", speaker: "이증권" },
        { title: "토스뱅크 AI 기반 고객 서비스", speaker: "박뱅크" }
      ]
    },
    {
      year: "2023",
      name: "SLASH 23",
      date: "2023년 4월 26일",
      attendees: 4500,
      keywords: ["마이크로서비스", "보안", "데이터"],
      highlights: "토스의 기술 스택 전면 공개",
      sessions: [
        { title: "토스의 마이크로서비스 아키텍처", speaker: "정마이크로" },
        { title: "토스 플랫폼의 보안 전략", speaker: "한보안" },
        { title: "토스의 데이터 기반 의사결정", speaker: "임데이터" }
      ]
    },
    {
      year: "2022",
      name: "SLASH 22",
      date: "2022년 4월 27일",
      attendees: 4000,
      keywords: ["서버리스", "UI/UX", "애자일"],
      highlights: "금융과 IT의 혁신적 결합 사례 소개",
      sessions: [
        { title: "토스의 서버리스 아키텍처", speaker: "최서버" },
        { title: "토스 앱의 UI/UX 디자인 철학", speaker: "유디자인" },
        { title: "토스의 애자일 개발 문화", speaker: "강애자일" }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div ref={containerRef} className="container mx-auto p-4 space-y-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Toss Conference 여정
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {conferences.map((conf, index) => (
          <motion.div
            key={conf.year}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedYear(selectedYear === conf.year ? null : conf.year)}
            >
              <CardHeader>
                <CardTitle>{conf.name}</CardTitle>
                <CardDescription>{conf.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">참가자 수: {conf.attendees}명</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">주요 키워드</h3>
                  <div className="flex flex-wrap gap-2">
                    {conf.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm py-1 px-2">{keyword}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">하이라이트</h3>
                  <p className="text-sm italic bg-gray-100 p-2 rounded">{conf.highlights}</p>
                </div>
              </CardContent>
            </Card>
            <AnimatePresence>
              {selectedYear === conf.year && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>세션 목록</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                        <ul className="space-y-2">
                          {conf.sessions.map((session, index) => (
                            <li key={index} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                              <span>{session.title}</span>
                              <Badge variant="outline">{session.speaker}</Badge>
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceDashboard;
