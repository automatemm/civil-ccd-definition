const {I} = inject();

module.exports = {

  fields: {
    informOtherPartyWithNotice: {
      id: '#generalAppInformOtherParty_isWithNotice',
      options: {
        yes: 'Yes',
        no: 'No'
      }
    },
    reasonsForWithoutNotice: '#generalAppInformOtherParty_reasonsForWithoutNotice'
  },

  async selectNotice(noticeCheck) {
    I.waitForElement(this.fields.informOtherPartyWithNotice.id);
    await I.runAccessibilityTest();
    if ('no' === noticeCheck) {
      await within(this.fields.informOtherPartyWithNotice.id, () => {
        I.click(this.fields.informOtherPartyWithNotice.options[noticeCheck]);
      });
      await I.fillField(this.fields.reasonsForWithoutNotice, 'hashjdgas jshdjkasdg');
    } else {
      await within(this.fields.informOtherPartyWithNotice.id, () => {
        I.click(this.fields.informOtherPartyWithNotice.options[noticeCheck]);
      });
    }
    await I.clickContinue();
  }
};

