// Type definitions for aws-sdk - AWS Certificate Manager
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

  /**
    * apiVersion: 2015-12-08
    * endpointPrefix: acm
    * serviceAbbreviation: ACM
    * signatureVersion: v4
    * protocol: json
    *
    * AWS Certificate ManagerWelcome to the AWS Certificate Manager (ACM) Command
 Reference. This guide provides descriptions, syntax, and usage examples for each
 ACM command. You can use AWS Certificate Manager to request ACM Certificates for
 your AWS-based websites and applications. For general information about using
 ACM and for more information about using the console, see the AWS Certificate
 Manager User Guide
 [http://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html] . For more
 information about using the ACM API, see the AWS Certificate Manager API
 Reference [http://docs.aws.amazon.com/acm/latest/APIReference/Welcome.html] .
    *
    */
  export class ACM extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Deletes an ACM Certificate and its associated private key. If this action
succeeds, the certificate no longer appears in the list of ACM Certificates that
can be displayed by calling the ListCertificates action or be retrieved by
calling the GetCertificate action. The certificate will not be available for use
by other AWS services.

You cannot delete an ACM Certificate that is being used by another AWS service.
To delete a certificate that is in use, the certificate association must first
be removed.
     *
     * @error ResourceNotFoundException The specified certificate cannot be found in the caller&#x27;s account, or the
caller&#x27;s account cannot be found.  
     * @error ResourceInUseException The certificate is in use by another AWS service in the caller&#x27;s account. Remove
the association and try again.  
     * @error InvalidArnException The requested Amazon Resource Name (ARN) does not refer to an existing resource.  
     */
    deleteCertificate(params: ACM.DeleteCertificateRequest, callback?: (err: ACM.ResourceNotFoundException | ACM.ResourceInUseException | ACM.InvalidArnException | any, data: any) => void): Request;
    /**
     * Returns a list of the fields contained in the specified ACM Certificate. For
example, this action returns the certificate status, a flag that indicates
whether the certificate is associated with any other AWS service, and the date
at which the certificate request was created. The ACM Certificate is specified
on input by its Amazon Resource Name (ARN).
     *
     * @error ResourceNotFoundException The specified certificate cannot be found in the caller&#x27;s account, or the
caller&#x27;s account cannot be found.  
     * @error InvalidArnException The requested Amazon Resource Name (ARN) does not refer to an existing resource.  
     */
    describeCertificate(params: ACM.DescribeCertificateRequest, callback?: (err: ACM.ResourceNotFoundException | ACM.InvalidArnException | any, data: ACM.DescribeCertificateResponse | any) => void): Request;
    /**
     * Retrieves an ACM Certificate and certificate chain for the certificate specified
by an ARN. The chain is an ordered list of certificates that contains the root
certificate, intermediate certificates of subordinate CAs, and the ACM
Certificate. The certificate and certificate chain are base64 encoded. If you
want to decode the certificate chain to see the individual certificate fields,
you can use OpenSSL.

Currently, ACM Certificates can be used only with Elastic Load Balancing and
Amazon CloudFront.
     *
     * @error ResourceNotFoundException The specified certificate cannot be found in the caller&#x27;s account, or the
caller&#x27;s account cannot be found.  
     * @error RequestInProgressException The certificate request is in process and the certificate in your account has
not yet been issued.  
     * @error InvalidArnException The requested Amazon Resource Name (ARN) does not refer to an existing resource.  
     */
    getCertificate(params: ACM.GetCertificateRequest, callback?: (err: ACM.ResourceNotFoundException | ACM.RequestInProgressException | ACM.InvalidArnException | any, data: ACM.GetCertificateResponse | any) => void): Request;
    /**
     * Retrieves a list of the ACM Certificate ARNs, and the domain name for each ARN,
owned by the calling account. You can filter the list based on the 
CertificateStatuses parameter, and you can display up to MaxItems certificates
at one time. If you have more than MaxItems certificates, use the NextToken 
marker from the response object in your next call to the ListCertificates action
to retrieve the next set of certificate ARNs.
     *
     */
    listCertificates(params: ACM.ListCertificatesRequest, callback?: (err: any, data: ACM.ListCertificatesResponse | any) => void): Request;
    /**
     * Requests an ACM Certificate for use with other AWS services. To request an ACM
Certificate, you must specify the fully qualified domain name (FQDN) for your
site. You can also specify additional FQDNs if users can reach your site by
using other names. For each domain name you specify, email is sent to the domain
owner to request approval to issue the certificate. After receiving approval
from the domain owner, the ACM Certificate is issued. For more information, see
the AWS Certificate Manager User Guide
[http://docs.aws.amazon.com/acm/latest/userguide/overview.html] .
     *
     * @error LimitExceededException An ACM limit has been exceeded. For example, you may have input more domains
than are allowed or you&#x27;ve requested too many certificates for your account. See
the exception message returned by ACM to determine which limit you have
violated. For more information about ACM limits, see the Limits
[http://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html] topic.  
     * @error InvalidDomainValidationOptionsException One or more values in the DomainValidationOption structure is incorrect.  
     */
    requestCertificate(params: ACM.RequestCertificateRequest, callback?: (err: ACM.LimitExceededException | ACM.InvalidDomainValidationOptionsException | any, data: ACM.RequestCertificateResponse | any) => void): Request;
    /**
     * Resends the email that requests domain ownership validation. The domain owner or
an authorized representative must approve the ACM Certificate before it can be
issued. The certificate can be approved by clicking a link in the mail to
navigate to the Amazon certificate approval website and then clicking I Approve 
. However, the validation email can be blocked by spam filters. Therefore, if
you do not receive the original mail, you can request that the mail be resent
within 72 hours of requesting the ACM Certificate. If more than 72 hours have
elapsed since your original request or since your last attempt to resend
validation mail, you must request a new certificate.
     *
     * @error ResourceNotFoundException The specified certificate cannot be found in the caller&#x27;s account, or the
caller&#x27;s account cannot be found.  
     * @error InvalidStateException Processing has reached an invalid state. For example, this exception can occur
if the specified domain is not using email validation, or the current
certificate status does not permit the requested operation. See the exception
message returned by ACM to determine which state is not valid.  
     * @error InvalidArnException The requested Amazon Resource Name (ARN) does not refer to an existing resource.  
     * @error InvalidDomainValidationOptionsException One or more values in the DomainValidationOption structure is incorrect.  
     */
    resendValidationEmail(params: ACM.ResendValidationEmailRequest, callback?: (err: ACM.ResourceNotFoundException | ACM.InvalidStateException | ACM.InvalidArnException | ACM.InvalidDomainValidationOptionsException | any, data: any) => void): Request;

  }

  export module ACM {

    export type Arn = string;

    export type CertificateBody = string;

    export type CertificateChain = string;

    export type CertificateStatus = string;

    export type CertificateStatuses = CertificateStatus[];

    export type CertificateSummaryList = CertificateSummary[];

    export type DomainList = DomainNameString[];

    export type DomainNameString = string;

    export type DomainValidationList = DomainValidation[];

    export type DomainValidationOptionList = DomainValidationOption[];

    export type IdempotencyToken = string;

    export type InUseList = String[];

    export type KeyAlgorithm = string;

    export type MaxItems = number;

    export type NextToken = string;

    export type RevocationReason = string;

    export type String = string;

    export type TStamp = number;

    export type ValidationEmailList = String[];

    export interface CertificateDetail {
      /** Amazon Resource Name (ARN) of the certificate. This is of the form:

arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] . **/
      CertificateArn?: Arn;
      /** Fully qualified domain name (FQDN), such as www.example.com or example.com, for
the certificate. **/
      DomainName?: DomainNameString;
      /** One or more domain names (subject alternative names) included in the certificate
request. After the certificate is issued, this list includes the domain names
bound to the public key contained in the certificate. The subject alternative
names include the canonical domain name (CN) of the certificate and additional
domain names that can be used to connect to the website. **/
      SubjectAlternativeNames?: DomainList;
      /** References a DomainValidation structure that contains the domain name in the
certificate and the email address that can be used for validation. **/
      DomainValidationOptions?: DomainValidationList;
      /** String that contains the serial number of the certificate. **/
      Serial?: String;
      /** The X.500 distinguished name of the entity associated with the public key
contained in the certificate. **/
      Subject?: String;
      /** The X.500 distinguished name of the CA that issued and signed the certificate. **/
      Issuer?: String;
      /** Time at which the certificate was requested. **/
      CreatedAt?: TStamp;
      /** Time at which the certificate was issued. **/
      IssuedAt?: TStamp;
      /** A CertificateStatus enumeration value that can contain one of the following: &amp;#42; 
 PENDING_VALIDATION
* 
 ISSUED
* 
 INACTIVE
* 
 EXPIRED
* 
 REVOKED
* 
 FAILED
* 
 VALIDATION_TIMED_OUT **/
      Status?: CertificateStatus;
      /** The time, if any, at which the certificate was revoked. This value exists only
if the certificate has been revoked. **/
      RevokedAt?: TStamp;
      /** A RevocationReason enumeration value that indicates why the certificate was
revoked. This value exists only if the certificate has been revoked. This can be
one of the following vales: &amp;#42; UNSPECIFIED
* KEY_COMPROMISE
* CA_COMPROMISE
* AFFILIATION_CHANGED
* SUPERCEDED
* CESSATION_OF_OPERATION
* CERTIFICATE_HOLD
* REMOVE_FROM_CRL
* PRIVILEGE_WITHDRAWN
* A_A_COMPROMISE **/
      RevocationReason?: RevocationReason;
      /** Time before which the certificate is not valid. **/
      NotBefore?: TStamp;
      /** Time after which the certificate is not valid. **/
      NotAfter?: TStamp;
      /** Asymmetric algorithm used to generate the public and private key pair. Currently
the only supported value is RSA_2048 . **/
      KeyAlgorithm?: KeyAlgorithm;
      /** Algorithm used to generate a signature. Currently the only supported value is 
SHA256WITHRSA . **/
      SignatureAlgorithm?: String;
      /** List that identifies ARNs that are using the certificate. A single ACM
Certificate can be used by multiple AWS resources. **/
      InUseBy?: InUseList;
    }
    export interface CertificateSummary {
      /** Amazon Resource Name (ARN) of the certificate. This is of the form:

arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] . **/
      CertificateArn?: Arn;
      /** Fully qualified domain name (FQDN), such as www.example.com or example.com, for
the certificate. **/
      DomainName?: DomainNameString;
    }
    export interface DeleteCertificateRequest {
      /** String that contains the ARN of the ACM Certificate to be deleted. This must be
of the form:

arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] . **/
      CertificateArn: Arn;
    }
    export interface DescribeCertificateRequest {
      /** String that contains an ACM Certificate ARN. The ARN must be of the form:

arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] . **/
      CertificateArn: Arn;
    }
    export interface DescribeCertificateResponse {
      /** Contains a CertificateDetail structure that lists the fields of an ACM
Certificate. **/
      Certificate?: CertificateDetail;
    }
    export interface DomainValidation {
      /** Fully Qualified Domain Name (FQDN) of the form www.example.com or example.com **/
      DomainName: DomainNameString;
      /** A list of contact address for the domain registrant. **/
      ValidationEmails?: ValidationEmailList;
      /** The base validation domain that acts as the suffix of the email addresses that
are used to send the emails. **/
      ValidationDomain?: DomainNameString;
    }
    export interface DomainValidationOption {
      /** Fully Qualified Domain Name (FQDN) of the certificate being requested. **/
      DomainName: DomainNameString;
      /** The domain to which validation email is sent. This is the base validation domain
that will act as the suffix of the email addresses. This must be the same as the 
DomainName value or a superdomain of the DomainName value. For example, if you
requested a certificate for site.subdomain.example.com and specify a 
ValidationDomain of subdomain.example.com , ACM sends email to the domain
registrant, technical contact, and administrative contact in WHOIS for the base
domain and the and the following five addresses: &amp;#42; admin@subdomain.example.com
* 
 administrator@subdomain.example.com
* 
 hostmaster@subdomain.example.com
* 
 postmaster@subdomain.example.com
* 
 webmaster@subdomain.example.com **/
      ValidationDomain: DomainNameString;
    }
    export interface GetCertificateRequest {
      /** String that contains a certificate ARN in the following format:

arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012

For more information about ARNs, see Amazon Resource Names (ARNs) and AWS
Service Namespaces
[http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html] . **/
      CertificateArn: Arn;
    }
    export interface GetCertificateResponse {
      /** String that contains the ACM Certificate represented by the ARN specified at
input. **/
      Certificate?: CertificateBody;
      /** The certificate chain that contains the root certificate issued by the
certificate authority (CA). **/
      CertificateChain?: CertificateChain;
    }
    export interface InvalidArnException {
      message?: String;
    }
    export interface InvalidDomainValidationOptionsException {
      message?: String;
    }
    export interface InvalidStateException {
      message?: String;
    }
    export interface LimitExceededException {
      message?: String;
    }
    export interface ListCertificatesRequest {
      /** Identifies the statuses of the ACM Certificates for which you want to retrieve
the ARNs. This can be one or more of the following values: &amp;#42; PENDING_VALIDATION
* ISSUED
* INACTIVE
* EXPIRED
* 
 VALIDATION_TIMED_OUT
* REVOKED
* FAILED **/
      CertificateStatuses?: CertificateStatuses;
      /** String that contains an opaque marker of the next ACM Certificate ARN to be
displayed. Use this parameter when paginating results, and only in a subsequent
request after you&#x27;ve received a response where the results have been truncated.
Set it to an empty string the first time you call this action, and set it to the
value of the NextToken element you receive in the response object for subsequent
calls. **/
      NextToken?: NextToken;
      /** Specify this parameter when paginating results to indicate the maximum number of
ACM Certificates that you want to display for each response. If there are
additional certificates beyond the maximum you specify, use the NextToken value
in your next call to the ListCertificates action. **/
      MaxItems?: MaxItems;
    }
    export interface ListCertificatesResponse {
      /** If the list has been truncated, this value is present and should be used for the 
NextToken input parameter on your next call to ListCertificates . **/
      NextToken?: NextToken;
      /** A list of the certificate ARNs. **/
      CertificateSummaryList?: CertificateSummaryList;
    }
    export interface RequestCertificateRequest {
      /** Fully qualified domain name (FQDN), such as www.example.com, of the site you
want to secure with an ACM Certificate. Use an asterisk (&amp;#42;) to create a wildcard
certificate that protects several sites in the same domain. For example,
*.example.com protects www.example.com, site.example.com, and
images.example.com. **/
      DomainName: DomainNameString;
      /** Additional FQDNs to be included in the Subject Alternative Name extension of the
ACM Certificate. For example, add the name www.example.net to a certificate for
which the DomainName field is www.example.com if users can reach your site by
using either name. **/
      SubjectAlternativeNames?: DomainList;
      /** Customer chosen string that can be used to distinguish between calls to 
RequestCertificate . Idempotency tokens time out after one hour. Therefore, if
you call RequestCertificate multiple times with the same idempotency token
within one hour, ACM recognizes that you are requesting only one certificate and
will issue only one. If you change the idempotency token for each call, ACM
recognizes that you are requesting multiple certificates. **/
      IdempotencyToken?: IdempotencyToken;
      /** The base validation domain that will act as the suffix of the email addresses
that are used to send the emails. This must be the same as the Domain value or a
superdomain of the Domain value. For example, if you requested a certificate for 
test.example.com and specify DomainValidationOptions of example.com , ACM sends
email to the domain registrant, technical contact, and administrative contact in
WHOIS and the following five addresses: &amp;#42; admin@example.com
* administrator@example.com
* hostmaster@example.com
* postmaster@example.com
* webmaster@example.com **/
      DomainValidationOptions?: DomainValidationOptionList;
    }
    export interface RequestCertificateResponse {
      /** String that contains the ARN of the issued certificate. This must be of the
form:


arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012 **/
      CertificateArn?: Arn;
    }
    export interface RequestInProgressException {
      message?: String;
    }
    export interface ResendValidationEmailRequest {
      /** String that contains the ARN of the requested certificate. The certificate ARN
is generated and returned by RequestCertificate as soon as the request is made.
By default, using this parameter causes email to be sent to all top-level
domains you specified in the certificate request.

The ARN must be of the form:


arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012 **/
      CertificateArn: Arn;
      /** The Fully Qualified Domain Name (FQDN) of the certificate that needs to be
validated. **/
      Domain: DomainNameString;
      /** The base validation domain that will act as the suffix of the email addresses
that are used to send the emails. This must be the same as the Domain value or a
superdomain of the Domain value. For example, if you requested a certificate for 
site.subdomain.example.com and specify a ValidationDomain of 
subdomain.example.com , ACM sends email to the domain registrant, technical
contact, and administrative contact in WHOIS and the following five addresses: &amp;#42; 
 admin@subdomain.example.com
* 
 administrator@subdomain.example.com
* 
 hostmaster@subdomain.example.com
* 
 postmaster@subdomain.example.com
* 
 webmaster@subdomain.example.com **/
      ValidationDomain: DomainNameString;
    }
    export interface ResourceInUseException {
      message?: String;
    }
    export interface ResourceNotFoundException {
      message?: String;
    }
  }
}