import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const ConferenceInfo = ({selectedSession,handleVideoEnd,showReviews,setShowReviews}) =>{
    return(
        <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>{selectedSession.title}</CardTitle>
              <CardDescription>발표자: {selectedSession.speaker}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">영상</h3>
                  <video
                    src={selectedSession.videoUrl}
                    controls
                    className="w-full"
                    onEnded={handleVideoEnd}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">요약</h3>
                  <p>{selectedSession.summary}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">참가자 리뷰</h3>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <AnimatePresence>
                      {(showReviews ||
                       selectedSession.reviews !=null && 
                       selectedSession.reviews.length <= 3) && (
                        <motion.ul
                          className="space-y-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {selectedSession.reviews.map((review, index) => (
                            <motion.li
                              key={index}
                              className="bg-gray-50 p-3 rounded"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <p className="font-semibold">{review.author}</p>
                              <p>{review.content}</p>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </ScrollArea>
                  {!showReviews 
                  && selectedSession.reviews !=null 
                  && selectedSession.reviews.length > 3 && (
                    <Button
                      onClick={() => setShowReviews(true)}
                      className="mt-4"
                    >
                      더 많은 리뷰 보기
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        </div>

    )
}

export default ConferenceInfo;