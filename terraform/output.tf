# This is the aws CLI command that must be run
output "api_env_json" {
  value = <<EOF
  {
  "ISSUER": "https://${var.org_name}.${var.base_url}/oauth2/${okta_auth_server.okta-dac.id}",
  "AUDIENCE": "api://${local.app_name}",
  "CLIENT_ID": "${okta_app_oauth.okta-dac.client_id}",
  "RESULT_TTL_IN_SECONDS": 0,
  "OKTA_API_KEY": "${var.api_token}",
  "TEMPLATE_CERT": "MIIDnjCCAoagAwIBAgIGAVzS5UBOMA0GCSqGSIb3DQEBCwUAMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxEDAOBgNVBAMMB3plZWtob28xHDAaBgkqhkiG9w0BCQEWDWluZm9Ab2t0YS5jb20wHhcNMTcwNjIzMDI1OTU4WhcNMjcwNjIzMDMwMDU4WjCBjzELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTALBgNVBAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRAwDgYDVQQDDAd6ZWVraG9vMRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtrAO+BxTPPSJetJEXPQze8THcRLaD8aiTyCfV6NnZ/ERX85NJ6YpOarF82OecQp2LhaP4SnZfFYPS8kaltk0YjSlz206XcDysGaUWPsIbDdljtLMbb1QXht3b+/dA6ynPtk0p1NqLwXTWuhZo+VJ04vEFq0CbQomvhU7zHnIvGIiTjvhAxW2UI25bkW9K8jvyJ7NaNZ+5J5MsTlpdYWvibd2p6UvuTz4XhQW+AajAubBdOcyCfuvl61d7TCd9rT0sot1qrCWB77rCr6DcR2tonJ7FSUaPezCobm/OgWi5NoC/M5lgXhoG+FwC6GqwiJwRpS9pI5dkmUudUDPVoh8bQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQA/W5j1euP2nLhSqlrJYwMm/7XXCqnhu3eBLnzkgRqNH6khtX1spAhC3w5L0w0JF4SgfjXAbAsWn6a6YsicEQsrDGdp3deMiKkkS9loWsJRhZB+FYvkrGv/EDtF9p16K2hcDbNAXkV7mKRbWiKthzWJ4o72DyPfwlyq8bTqVDk5ymHBYu2taomgRSQq/E+vGU1XXK9mPBHOq+ZeIDr+g8zvZhsU0R1uH+jM9iniPVX7DirN0NwrsYfl5mDCZTjCiA5sRnHN644s3Kw0GHbvEYsxfjQQm/FtPiVQzg2H8EygVTOnQnyt+5KMEeEz7OTBxmkn+qw/u2YTUuUiUAM7dwt5",
  "IDP_DISCO_POLICY_ID": "${data.okta_policy.idp_policy.id}",
  "DNS_VERIFY_PREFIX": "_oktadac.verification"    
  }
EOF
}

output "vue_env_dev" {
  value = <<EOF
VUE_APP_CLIENT_ID=${okta_app_oauth.okta-dac.client_id}
VUE_APP_ISSUER=https://${var.org_name}.${var.base_url}/oauth2/${okta_auth_server.okta-dac.id}
VUE_APP_ENFORCE_DOMAIN_CHECK=true
VUE_APP_LOGO=
VUE_APP_LOGO_INVERSE=
VUE_APP_COMPANY_NAME=
EOF
}
