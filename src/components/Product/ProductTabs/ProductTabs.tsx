import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TabsRelatedItems from './TabsRelatedItems';
import TabsDetail from './TabsDetail';
import TabsPurchaseGuide from './TabsPurchaseGuide';
import TabsReview from './TabsReview';
import TabsInquiry from './TabsInquiry';
import { ProductType } from '@/data/product';

export default function ProductTabs({ data }: { data: ProductType }) {
  return (
    <div className="md:w-4/5 md:mx-auto px-8 md:px-24 mt-8 mb-24 ">
      <Tabs defaultValue="0">
        <TabsList className="flex flex-wrap gap-4 w-full h-full">
          <TabsTrigger value="0">관련상품</TabsTrigger>
          <TabsTrigger value="1">상세정보</TabsTrigger>
          <TabsTrigger value="2">구매가이드</TabsTrigger>
          <TabsTrigger value="3">구매후기(0)</TabsTrigger>
          <TabsTrigger value="4">상품문의(0)</TabsTrigger>
        </TabsList>
        <div className="my-4">
          <TabsContent value="0">
            <TabsRelatedItems category={data.category} />
          </TabsContent>
          <TabsContent value="1">
            <TabsDetail />
          </TabsContent>
          <TabsContent value="2">
            <TabsPurchaseGuide />
          </TabsContent>
          <TabsContent value="3">
            <TabsReview />
          </TabsContent>
          <TabsContent value="4">
            <TabsInquiry />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
