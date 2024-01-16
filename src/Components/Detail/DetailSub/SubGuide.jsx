// import components
import { styled } from 'styled-components';
import { SubItemTitle, SubItemWrapper } from './SubRelated';

const GuideInner = styled.div`
    padding: 5rem 10rem 2.5rem 5rem;
    margin: 0 5rem;
    border: 1px solid #999;
    border-radius: 10px;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 2rem;
        margin: 0 1rem;
    }
`;

const GuideItem = styled.div`
    margin-bottom: 2rem;
    p {
        font-size: 0.75rem;
        font-weight: 300;
        line-height: 1.5;
        color: #000;
        margin-bottom: 1rem;
    }
    p.guide_sub_title {
        font-weight: 500;
    }
`;

const GuideItemTitle = styled.h5`
    margin-bottom: 1rem;
    font-size: 0.9rem;
    font-weight: 700;
`;

export default function SubGuide() {
    return (
        <SubItemWrapper className="sub_guide">
            <SubItemTitle>구매가이드</SubItemTitle>
            <GuideInner>
                <GuideItem>
                    <GuideItemTitle>상품 결제정보</GuideItemTitle>
                    <p>
                        고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴
                        수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인
                        명의의 주문등 정상적인 주문이 아니라고 판단될 경우
                        임의로 주문을 보류 또는 취소할 수 있습니다.
                    </p>
                    <p>
                        무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹,
                        텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.
                        주문시 입력한 입금자명과 실제입금자의 성명이 반드시
                        일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지
                        않은 주문은 자동취소 됩니다.
                    </p>
                </GuideItem>
                <GuideItem>
                    <GuideItemTitle>배송안내</GuideItemTitle>
                    <p>
                        - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야
                        하는 경우가 있습니다. 고객님께서 주문하신 상품은 입금
                        확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의
                        배송이 다소 지연될 수 있습니다.
                    </p>
                </GuideItem>
                <GuideItem>
                    <GuideItemTitle>교환 및 반품안내</GuideItemTitle>
                    <div>
                        <p className="guide_sub_title">교환 및 반품 주소</p>
                        <p>- [810-0022] 후쿠오카현 후쿠오카시 중앙구 야쿠인</p>
                    </div>
                    <div>
                        <p className="guide_sub_title">
                            교환 및 반품이 가능한 경우
                        </p>
                        <p>
                            - 상품을 공급 받으신 날로부터 7일이내
                            <br /> 단 , 의류 택을 제거 하였거나 의류가 훼손되어
                            상품가치가 상실된 경우에는 교환/반품이 불가능합니다.
                            <br /> 하얀색 계열 의류나 늘어날 수 있는 니트류는
                            착용시 교환 반품 환불이 불가능 합니다.
                        </p>
                    </div>
                    <div>
                        <p className="guide_sub_title">
                            교환 및 반품이 불가능한 경우
                        </p>
                        <p>
                            - 고객님의 책임 있는 사유로 상품이 멸실 혹은 훼손된
                            경우. <br />- 의류 택을 제거 하였거나 의류가
                            훼손되어 상품가치가 상실된 경우 <br />- 고객님이
                            의류를 착용하여 가치가 현저히 감소한 경우 (향수,냄새
                            등) <br />- 시간의 경과에 의하여 재판매가 곤란할
                            정도로 가치가 현저히 감소한 경우 <br />- 자세한
                            내용은 고객상담센터를 이용해 주시기 바랍니다. 전화
                            (08012345678) 카카오톡 @ryanshop
                        </p>
                    </div>
                    <div>
                        <p>
                            ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우
                            상품반송 비용은 고객님께서 부담하셔야 합니다. (색상
                            교환, 사이즈 교환 등 포함)
                        </p>
                    </div>
                </GuideItem>
            </GuideInner>
        </SubItemWrapper>
    );
}
