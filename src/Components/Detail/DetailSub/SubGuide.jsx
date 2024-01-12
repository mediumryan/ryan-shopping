// import components
import { SubItemWrapper } from './SubRelated';
import SubMenuBar from './SubMenuBar';

export default function SubGuide() {
    return (
        <SubItemWrapper className="sub_guide" index={2}>
            <SubMenuBar />
        </SubItemWrapper>
    );
}
