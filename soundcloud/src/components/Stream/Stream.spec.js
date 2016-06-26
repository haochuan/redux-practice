import test from 'tape'
// import expect from 'expect'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Stream from './'


test('[component]--->Stream', (it) => {
    it.plan(1);

    const props = {
        tracks: [{ title: 'x' }, { title: 'y' }],
    };

    it.test('shows two elements', (t) => {
        const wrapper = shallow(<Stream {...props} />);
        t.equal(wrapper.find('.stream-track').length, 2);
    });
    it.end();
});