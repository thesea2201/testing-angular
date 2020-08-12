import { VoteComponent} from './vote.component';

describe('VoteComponent', () => {
    let component: VoteComponent;
    beforeEach(() => {
        component = new VoteComponent();
    })

    it('should increment totalUpvote when upvoted', () => {
        component.upVote();

        expect(component.totalVote).toBe(1);
    })

    it('should decrement totalUpvote when downvoted', () => {
        component.downVote();

        expect(component.totalVote).toBe(-1);
    })
})