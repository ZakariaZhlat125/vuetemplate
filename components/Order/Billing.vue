<template>
  <section>
    
    <div class="col-md-12 d-none">
          <h4 class="mb-3">billing-address</h4>
          <form class="needs-validation" novalidate>
            
            <div class="row">

              <div class="col-md-6 mb-3">
                <label for="country">country</label>
                <select name="select_box" class="form-select" id="country" style="direction: ltr;">
                  <option value="">choose</option>
                      <option value="1">America</option>
                </select>
                  <span class="text-danger country-error-msg d-none">validation</span>
              </div>
              <div class="col-md-6 mb-3">
                <label for="city">city</label>
                <div class="city-box">
                  <input type="text" class="form-control" name="city" id="city" placeholder="" value="" required>
                    <span class="text-danger city-error-msg d-none">city require validatoin</span>
                </div>
              </div>

              <div class="col-md-6 mb-3 ">
                <label for="city">shipping-cost</label>
                <div class="city-box">
                    <input type="text" class="form-control" name="shipping-cost" id="shipping_cost" placeholder="" value="1000" disabled>
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div><!--.row-->

            <div class="mb-3">
              <label for="address">address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
            </div>

            <hr class="mb-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
              <label class="form-check-label" for="defaultCheck1">
                  Shipping address is the same as my billing address
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
              <label class="form-check-label" for="defaultCheck2">
                  Save this information for next time
              </label>
            </div>
            <hr class="mb-4">

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">
                      Credit card
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                  <label class="form-check-label" for="flexRadioDefault2">
                      Debit card
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
                  <label class="form-check-label" for="flexRadioDefault3">
                      Paypal
                  </label>
                </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr class="mb-4">
            
          </form>
        </div>
  </section>
</template>