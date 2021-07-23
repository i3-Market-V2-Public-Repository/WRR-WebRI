import { useState } from 'react'
import { Layout } from '/components/common.js'
import {Card, Form, Col, Row, Accordion, Button} from 'react-bootstrap'
import CustomToggle from '/components/CustomToggle.js'

function RegisterOfferingDatasetInformation(props) {
  const { eventKey } = props;

  return (
      <Accordion>
        <Card className="mb-3">
          <CustomToggle eventKey={eventKey}>
            Dataset Information
          </CustomToggle>
          <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'cppType'}>
                    <Form.Label>cpp Type</Form.Label>
                    <Form.Control type="text" placeholder="cpp Type"
                      name={eventKey + 'cppType'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'deviceID'}>
                    <Form.Label>Device ID</Form.Label>
                    <Form.Control type="text" placeholder="Device ID"
                      name={eventKey + 'deviceID'}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'measurementChannelType'}>
                    <Form.Label>Measurement Channel Type</Form.Label>
                    <Form.Control type="text" placeholder="Measurement Channel Type"
                      name={eventKey + 'measurementChannelType'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'measurementType'}>
                    <Form.Label>Measurement Type</Form.Label>
                    <Form.Control type="text" placeholder="Measurement Type"
                      name={eventKey + 'measurementType'}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'sensorID'}>
                    <Form.Label>Sensor ID</Form.Label>
                    <Form.Control type="text" placeholder="Sensor ID"
                      name={eventKey + 'sensorID'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'sensorType'}>
                    <Form.Label>Sensor Type</Form.Label>
                    <Form.Control type="text" placeholder="Sensor Type"
                      name={eventKey + 'sensorType'}
                    />
                  </Form.Group>
                </Col>
              </Row>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  );
}

function RegisterOfferingDatasetDistribution(props) {
  const { eventKey } = props;
  const [ accessServiceN, setAccessServiceN ] = useState(1);

  const accessServiceEl = (Array.from(Array(accessServiceN).keys())).map((item, idx) => (
      <RegisterOfferingDatasetDistributionAccessService key={idx}
        eventKey={`${eventKey}accessService${idx}`} />
  ));

  return (
      <Accordion>
        <Card>
          <CustomToggle eventKey={eventKey}>
            Distribution
          </CustomToggle>
          <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>
              <Form.Group controlId={eventKey + 'title'}>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Distribution Title"
                  name={eventKey + 'title'}
                />
              </Form.Group>

              <Form.Group controlId={eventKey + 'distribution'}>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}
                  placeholder="Distribution Description"
                  name={eventKey + 'distribution'}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'license'}>
                    <Form.Label>License</Form.Label>
                    <Form.Control type="text" placeholder="License"
                      name={eventKey + 'license'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'conformsTo'}>
                    <Form.Label>conformsTo</Form.Label>
                    <Form.Control type="text" placeholder="conformsTo"
                      name={eventKey + 'conformsTo'}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'mediaType'}>
                    <Form.Label>mediaType</Form.Label>
                    <Form.Control type="text" placeholder="mediaType"
                      name={eventKey + 'mediaType'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'packageFormat'}>
                    <Form.Label>packageFormat</Form.Label>
                    <Form.Control type="text" placeholder="packageFormat"
                      name={eventKey + 'packageFormat'}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {accessServiceEl}

              <input type="hidden" value={accessServiceN}
                name={eventKey + 'accessServiceN'} />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  );
}

function RegisterOfferingDatasetDistributionAccessService(props) {
  const { eventKey } = props;

  return (
      <Accordion>
        <Card>
          <CustomToggle eventKey={eventKey}>
            Access Service
          </CustomToggle>
          <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'endpointDescription'}>
                    <Form.Label>Endpoint Description</Form.Label>
                    <Form.Control type="text" placeholder="Endpoint Description"
                      name={eventKey + 'endpointDescription'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'endpointUrl'}>
                    <Form.Label>Endpoint URL</Form.Label>
                    <Form.Control type="text" placeholder="Endpoint URL"
                      name={eventKey + 'endpointUrl'}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'conformsTo'}>
                    <Form.Label>Conforms To</Form.Label>
                    <Form.Control type="text" placeholder="Conforms To"
                      name={eventKey + 'conformsTo'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'servesDataset'}>
                    <Form.Label>Serves Dataset</Form.Label>
                    <Form.Control type="text" placeholder="Serves Dataset"
                      name={eventKey + 'servesDataset'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'Service Specs'}>
                    <Form.Label>Service Specs</Form.Label>
                    <Form.Control type="text" placeholder="Service Specs" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  );
}

function RegisterOfferingDataset(props) {
  const { eventKey } = props;
  const [ informationN, setInformationN ] = useState(1);
  const [ distributionN, setDistributionN ] = useState(1);

  const datasetInformationEl = (Array.from(Array(informationN).keys())).map((item, idx) => (
      <RegisterOfferingDatasetInformation key={idx}
        eventKey={`${eventKey}information${idx}`} />
  ));

  const datasetDistributionEl = (Array.from(Array(distributionN).keys())).map((item, idx) => (
      <RegisterOfferingDatasetDistribution key={idx}
        eventKey={`${eventKey}distribution${idx}`} />
  ));

  return (
    <Accordion>
      <Card>
        <CustomToggle eventKey={eventKey}>
          Dataset
        </CustomToggle>
        <Accordion.Collapse eventKey={eventKey}>
          <Card.Body>
            <Form.Group controlId={eventKey + 'title'}>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Dataset Title"
                name={eventKey + 'title'}
              />
            </Form.Group>

            <Form.Group controlId={eventKey + 'description'}>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
                placeholder="Dataset Description"
                name={eventKey + 'description'}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId={eventKey + 'creator'}>
                  <Form.Label>Creator</Form.Label>
                  <Form.Control type="text" placeholder="Creator"
                    name={eventKey + 'creator'}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={eventKey + 'issued'}>
                  <Form.Label>Issued</Form.Label>
                  <Form.Control type="date" placeholder="Issued"
                    name={eventKey + 'issued'}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={eventKey + 'modified'}>
                  <Form.Label>Modified</Form.Label>
                  <Form.Control type="date" placeholder="Modified"
                    name={eventKey + 'modified'}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId={eventKey + 'language'}>
                  <Form.Label>Language</Form.Label>
                  <Form.Control type="text" placeholder="Language"
                    name={eventKey + 'language'}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={eventKey + 'temporal'}>
                  <Form.Label>Temporal</Form.Label>
                  <Form.Control type="text" placeholder="Temporal"
                    name={eventKey + 'temporal'}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={eventKey + 'temporalResolution'}>
                  <Form.Label>Temporal Resolution</Form.Label>
                  <Form.Control type="text" placeholder="Temporal Resolution"
                    name={eventKey + 'temporalResolution'}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId={eventKey + 'spatial'}>
                  <Form.Label>Spatial</Form.Label>
                  <Form.Control type="text" placeholder="Spatial"
                    name={eventKey + 'spatial'}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={eventKey + 'accrualPeriodicity'}>
                  <Form.Label>Accrual Periodicity</Form.Label>
                  <Form.Control type="text" placeholder="Accrual Periodicity"
                    name={eventKey + 'accrualPeriodicity'}
                  />
                </Form.Group>
              </Col>
            </Row>

            { datasetInformationEl}

            { datasetDistributionEl}

            <input type="hidden" value={informationN}
              name={eventKey + 'informationN'} />
            <input type="hidden" value={distributionN}
              name={eventKey + 'distributionN'} />

          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

function RegisterOfferingPricingModelPaymentType(props) {
  const { eventKey } = props;

  return (
      <Accordion>
        <Card>
          <CustomToggle eventKey={eventKey}>
            Payment Type - Subscription
          </CustomToggle>
          <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'subscriptionPrice'}>
                    <Form.Label>Subscription Price</Form.Label>
                    <Form.Control type="text" placeholder="Subscription Price"
                      name={eventKey + 'subscriptionPrice'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'from'}>
                    <Form.Label>From</Form.Label>
                    <Form.Control type="date" placeholder="From"
                      name={eventKey + 'from'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'to'}>
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date" placeholder="To"
                      name={eventKey + 'to'}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'paymentType'}>
                    <Form.Label>Payment Type</Form.Label>
                    <Form.Control type="text" placeholder="Payment Type"
                      name={eventKey + 'paymentType'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'repeat'}>
                    <Form.Label>Repeat</Form.Label>
                    <Form.Control type="text" placeholder="repeat"
                      name={eventKey + 'repeat'}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'timeDuration'}>
                    <Form.Label>Time Duration</Form.Label>
                    <Form.Control type="text" placeholder="Time Duration"
                      name={eventKey + 'timeDuration'}
                    />
                  </Form.Group>
                </Col>
              </Row>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  );
}

function RegisterOfferingPricingModel(props) {
  const [ paymentTypeN, setPaymentTypeN ] = useState(1);
  const { eventKey } = props;

  const paymentTypeEl = (Array.from(Array(paymentTypeN).keys())).map((item, idx) => (
      <RegisterOfferingPricingModelPaymentType key={idx}
        eventKey={`${eventKey}paymentType${idx}`} />
  ));


  return (
      <Accordion>
        <Card className="my-3">
          <CustomToggle eventKey={eventKey}>
            Pricing Model
          </CustomToggle>
          <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>

              <Row>
                <Col>
                  <Form.Group controlId={eventKey + 'basicPrice'}>
                    <Form.Label>Basic Price</Form.Label>
                    <Form.Control type="text" placeholder="Basic Price"
                      name={eventKey + 'basicPrice'}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId={eventKey + 'currency'}>
                    <Form.Label>Currency</Form.Label>
                    <Form.Control type="text" placeholder="Currency"
                      name={eventKey + 'currency'}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {paymentTypeEl}

              <input type="hidden" value={paymentTypeN}
                name={eventKey + 'paymentTypeN'} />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  );
}

export default function RegisterOffering() {
  const [ datasetN, setDatasetN ] = useState(1);
  const [ pricingModelN, setPricingModelN ] = useState(1);

  const datasetEl = (Array.from(Array(datasetN).keys())).map((item, idx) => (
    <RegisterOfferingDataset key={idx} eventKey={`dataset${idx}`} />
  ));

  const pricingModelEl = (Array.from(Array(pricingModelN).keys())).map((item, idx) => (
      <RegisterOfferingPricingModel key={idx} eventKey={`princingModel${idx}`} />
  ));

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    let res = {

    };
    // fetch(form.action, { method: 'post', body: fd });
  }

  return (<Layout>
    <Form className="px-5" onSubmit={onSubmit} action='/api/offerings/register'>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Offering Title" name="title" />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3}
          placeholder="Offering Description" name="description"/>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Category" name="category"/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="provider">
            <Form.Label>Provider</Form.Label>
            <Form.Control type="text" placeholder="Provider" name="provider" disabled />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="license">
            <Form.Label>License</Form.Label>
            <Form.Control type="text" placeholder="License" name="license" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="label">
            <Form.Label>Label</Form.Label>
            <Form.Control type="text" placeholder="Label" name="label" />
          </Form.Group>
        </Col>
      </Row>

      { datasetEl }

      { pricingModelEl }

      <input type="hidden" value={datasetN} name="datasetN" />
      <input type="hidden" value={pricingModelN} name="pricingModelN" />

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-secondary mr-3" type="button">Cancel</button>
        <button className="btn btn-primary" type="button">Register</button>
      </div>
    </Form>
  </Layout>);
}

