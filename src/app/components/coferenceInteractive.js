import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ConferenceInfo from './conferenceInfo';

const ConferenceDashboard = ({ onClose }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showSessions, setShowSessions] = useState(false);
  const containerRef = useRef(null);
  const [showReviews, setShowReviews] = useState(false);

  const conferences = [
    {
      year: "2022",
      name: "SLASH 22",
      date: "2022년 4월 27일",
      attendees: 4000,
      keywords: ["서버리스", "UI/UX", "애자일"],
      highlights: "금융과 IT의 혁신적 결합 사례 소개",
      sessions: [
        { 
          title: "토스의 서버리스 아키텍처", 
          speaker: "최서버",
          duration: 45,
          views: 3500,
          videoUrl: "https://example.com/video2022-1",
          summary: "토스의 서버리스 아키텍처에 대한 심층적인 분석과 실제 적용 사례를 소개합니다."
        },
        { 
          title: "토스 앱의 UI/UX 디자인 철학", 
          speaker: "유디자인",
          duration: 30,
          views: 4000,
          videoUrl: "https://example.com/video2022-2",
          summary: "사용자 중심의 직관적인 금융 서비스 설계 원칙과 프로세스를 공유합니다."
        },
        { 
          title: "토스의 애자일 개발 문화", 
          speaker: "강애자일",
          duration: 40,
          views: 3800,
          videoUrl: "https://example.com/video2022-3",
          summary: "빠르게 변화하는 핀테크 시장에서 토스의 애자일 방법론 적용 사례를 설명합니다."
        }
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
        { 
          title: "토스의 마이크로서비스 아키텍처", 
          speaker: "정마이크로",
          duration: 50,
          views: 4200,
          videoUrl: "https://example.com/video2023-1",
          summary: "대규모 트래픽을 처리하는 토스의 마이크로서비스 아키텍처 설계와 운영 노하우를 공유합니다."
        },
        { 
          title: "토스 플랫폼의 보안 전략", 
          speaker: "한보안",
          duration: 35,
          views: 4100,
          videoUrl: "https://example.com/video2023-2",
          summary: "금융 데이터 보호를 위한 토스의 다층적 보안 전략과 기술적 해결책을 소개합니다."
        },
        { 
          title: "토스의 데이터 기반 의사결정", 
          speaker: "임데이터",
          duration: 40,
          views: 4300,
          videoUrl: "https://example.com/video2023-3",
          summary: "빅데이터와 AI를 활용한 토스의 데이터 기반 의사결정 프로세스를 설명합니다."
        }
      ]
    },
    {
      year: "2024",
      name: "SLASH 24",
      date: "2024년 4월 25일",
      attendees: 5000,
      keywords: ["AI", "블록체인", "클라우드"],
      highlights: "블록체인 기술을 활용한 새로운 금융 서비스 발표",
      sessions: [
        { 
          title: "토스페이먼츠 대규모 시스템 설계", 
          speaker: "김토스",
          videoUrl: "https://example.com/video1",
          summary: "이 세션에서는 토스페이먼츠의 대규모 시스템 설계에 대해 다룹니다. 높은 트래픽을 처리하기 위한 아키텍처와 확장성 있는 데이터베이스 설계 등을 소개합니다.",
          reviews: [
            { author: "개발자A", content: "실제 사례를 바탕으로 한 설명이 매우 유익했습니다." },
            { author: "학생B", content: "대규모 시스템에 대한 이해도가 크게 향상되었습니다." }
          ]
        },
        { 
          title: "토스증권 초저지연 시스템 아키텍처", 
          speaker: "이증권",
          videoUrl: "https://example.com/video2",
          summary: "토스증권의 초저지연 시스템 아키텍처에 대해 설명합니다. 실시간 주식 거래를 위한 최적화 기법과 네트워크 레이턴시 감소 방안 등을 다룹니다.",
          reviews: [
            { author: "트레이더C", content: "금융 시스템의 성능 최적화에 대한 인사이트를 얻었습니다." },
            { author: "엔지니어D", content: "실제 적용 가능한 기술적 해결책들이 인상적이었습니다." }
          ]
        },
        { 
          title: "토스뱅크 AI 기반 고객 서비스", 
          speaker: "박뱅크",
          videoUrl: "https://example.com/video3",
          summary: "토스뱅크의 AI 기반 고객 서비스 시스템에 대해 소개합니다. 자연어 처리와 머신러닝을 활용한 개인화된 금융 상담 서비스 구현 방법을 설명합니다.",
          reviews: [
            { author: "AI 연구원E", content: "금융 분야에서의 AI 적용 사례가 매우 흥미로웠습니다." },
            { author: "UX 디자이너F", content: "AI와 사용자 경험을 결합한 접근 방식이 인상적이었습니다." }
          ]
        }
      ]
    },
    
    // ... 다른 연도의 컨퍼런스 정보 (2023, 2022)
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

  const handleYearClick = (year) => {
    setSelectedYear(year);
    const conference = conferences.find(conf => conf.year === year);
    if (conference && conference.sessions.length > 0) {
      setSelectedSession(conference.sessions[0]);
      setShowSessions(true);
    } else {
      setSelectedSession(null);
      setShowSessions(false);
    }
  };

  const handleSessionClick = (session) => {
    setSelectedSession(session);
    setShowReviews(false);
  };

  const handleVideoEnd = () => {
    setShowReviews(true);
  };

  return (
    <div ref={containerRef} className="container mx-auto p-4 space-y-8 relative">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Toss Conference 여정
      </motion.h1>
      
      {showSessions && selectedYear && (
        <motion.div
          className="fixed top-4 right-4 z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <Button
            onClick={() => setShowSessions(!showSessions)}
            className="mb-2"
          >
            {showSessions ? "세션 숨기기" : "세션 보기"}
          </Button>
          {showSessions && (
            <Card className="w-64">
              <CardHeader>
                <CardTitle>세션 목록</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <ul className="space-y-2">
                    {conferences.find(conf => conf.year === selectedYear).sessions.map((session, index) => (
                      <li 
                        key={index} 
                        className="flex justify-between items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
                        onClick={() => handleSessionClick(session)}
                      >
                        <span>{session.title}</span>
                        <Badge variant="outline">{session.speaker}</Badge>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          )}
        </motion.div>
      )}
      
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
              onClick={() => handleYearClick(conf.year)}
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
          </motion.div>
        ))}
      </div>
      {selectedSession && (
        <ConferenceInfo selectedSession={selectedSession} showReviews={showReviews} handleVideoEnd={handleVideoEnd} setShowReviews={setShowReviews} />
      )}
    </div>
  );
};

export default ConferenceDashboard;