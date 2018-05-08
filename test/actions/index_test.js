import { expect } from '../test_helper';
import {SAVE_COMMENT} from "../../src/actions/types";
import {saveComment, SaveComment} from '../../src/actions';

describe('actions', () => {
    describe('saveComment',() => {
        it('has the correct type',() => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has the correct pauload', () => {
            const action = saveComment('new comment');
            expect(action.payload).to.equal('new comment');
        });
    });
});