// import components
import { SubItemWrapper } from './SubRelated';
import SubMenuBar from './SubMenuBar';

export default function SubDetail() {
    return (
        <SubItemWrapper className="sub_detail" index={1}>
            <SubMenuBar />
        </SubItemWrapper>
    );
}
