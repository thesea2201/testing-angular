import { unusedValueExportToPlacateAjd } from "@angular/core/src/render3/interfaces/projection";

export class VoteComponent {
    totalVote = 0;

    upVote() {
        this.totalVote++;
    }

    downVote() {
        this.totalVote--;
    }
}