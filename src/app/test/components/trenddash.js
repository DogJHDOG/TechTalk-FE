import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AITimeline = () => {
    const timelineData = [
      { year: 1950, event: '앨런 튜링, "컴퓨터와 지능" 논문 발표' },
      { year: 1956, event: '다트머스 회의에서 "인공지능" 용어 탄생' },
      { year: 1997, event: 'IBM의 딥블루, 체스 세계 챔피언 가리 카스파로프 격파' },
      { year: 2011, event: 'IBM Watson, 퀴즈쇼 Jeopardy! 우승' },
      { year: 2014, event: '구글, DeepMind 인수' },
      { year: 2016, event: 'AlphaGo, 이세돌 9단 격파' },
      { year: 2020, event: 'OpenAI, GPT-3 발표' },
      { year: 2022, event: 'ChatGPT 출시, AI 대화 모델의 대중화' },
      { year: 2023, event: 'GPT-4 발표, 다중 모달 AI 능력 향상' }
    ];
  
    return (
      <Card className="my-6">
        <CardHeader>
          <h2 className="text-2xl font-bold">AI 기술 발전 타임라인</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">연도</TableHead>
                <TableHead>주요 사건</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {timelineData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.year}</TableCell>
                  <TableCell>{item.event}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  };
  
  const ChallengesAndRisks = () => {
    const challengesData = [
      { category: '윤리적 문제', items: ['AI 결정의 편향성', '개인정보 보호', 'AI의 책임성 문제'] },
      { category: '기술적 도전', items: ['설명 가능한 AI 개발', '강화학습의 안정성', '에너지 효율적인 AI'] },
      { category: '사회경제적 영향', items: ['일자리 대체', 'AI 격차 심화', '가짜 뉴스와 딥페이크'] },
      { category: '법적/규제적 과제', items: ['AI 규제 프레임워크', 'AI의 지적재산권', '자율주행차 사고 책임'] }
    ];
  
    return (
      <Card className="my-6">
        <CardHeader>
          <h2 className="text-2xl font-bold">AI 트렌드의 리스크와 도전과제</h2>
        </CardHeader>
        <CardContent>
          {challengesData.map((category, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
              <ul className="list-disc pl-5">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    );
};

const TechTrendMasonry = () => {
  const trendData = [
    { type: 'keyword', content: '인공지능', color: 'bg-blue-100' },
    { type: 'keyword', content: '블록체인', color: 'bg-green-100' },
    { type: 'keyword', content: '메타버스', color: 'bg-yellow-100' },
    { type: 'case', title: 'AI 챗봇 상용화', content: '여러 기업에서 AI 기반 고객 서비스 도입', color: 'bg-purple-100' },
    { type: 'case', title: '자율주행차 시범 운행', content: '도심에서 레벨 4 자율주행 테스트 진행 중', color: 'bg-purple-100' },
    { type: 'influencer', name: '일론 머스크', opinion: 'AI 규제 필요성 강조', color: 'bg-pink-100' },
    { type: 'influencer', name: '마크 저커버그', opinion: '메타버스는 차세대 인터넷', color: 'bg-pink-100' },
    { type: 'timeline', year: 2020, event: '5G 상용화', color: 'bg-indigo-100' },
    { type: 'timeline', year: 2022, event: '메타버스 플랫폼 출시', color: 'bg-indigo-100' },
    { type: 'timeline', year: 2023, event: 'GPT-4 발표', color: 'bg-indigo-100' },
    { type: 'challenge', content: '데이터 프라이버시 보호', color: 'bg-red-100' },
    { type: 'challenge', content: 'AI 윤리 문제', color: 'bg-red-100' },
    { type: 'challenge', content: '사이버 보안 위협 증가', color: 'bg-red-100' },
  ];

  const renderCard = (item, index) => {
    switch (item.type) {
      case 'keyword':
        return (
          <Card key={index} className={`${item.color} p-4 mb-4`}>
            <CardContent className="text-lg font-bold">{item.content}</CardContent>
          </Card>
        );
      case 'case':
        return (
          <Card key={index} className={`${item.color} p-4 mb-4`}>
            <CardHeader className="font-bold">{item.title}</CardHeader>
            <CardContent>{item.content}</CardContent>
          </Card>
        );
      case 'influencer':
        return (
          <Card key={index} className={`${item.color} p-4 mb-4`}>
            <CardHeader className="font-bold">{item.name}</CardHeader>
            <CardContent>"{item.opinion}"</CardContent>
          </Card>
        );
      case 'timeline':
        return (
          <Card key={index} className={`${item.color} p-4 mb-4`}>
            <CardHeader className="font-bold">{item.year}</CardHeader>
            <CardContent>{item.event}</CardContent>
          </Card>
        );
      case 'challenge':
        return (
          <Card key={index} className={`${item.color} p-4 mb-4`}>
            <CardContent className="font-bold text-red-600">{item.content}</CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Trend Dashboards</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {trendData.map((item, index) => renderCard(item, index))}
      </div>
      <AITimeline />
      <ChallengesAndRisks />
    </div>
  );
};

export default TechTrendMasonry;