'use strict'

const { test, trait } = use('Test/Suite')('Hello World')

trait('Test/Browser')

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})

test('Visit home page', async ({ browser }) => {
  const page = await browser.visit('/')
  await page.assertHas('Adonis')
}).timeout(0)
