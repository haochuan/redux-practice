import test from 'tape'
import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import { Stream } from '../../src/components/Stream'


test('[component]--->Stream', (it) => {
    it.plan(1);

    const props = {
        tracks: [{ title: 'x' }, { title: 'y' }],
    };

    it.test('shows two elements', (t) => {
        const wrapper = shallow(<Stream {...props} />);
        console.log('eeeee');
        // console.log(wrapper.find('.track'));
        // t.equal(wrapper.find('.track'), 2);
    });
    it.end();
});